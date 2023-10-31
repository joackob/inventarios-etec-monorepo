from flask import (Blueprint, abort, jsonify, request, url_for)
from flaskr.db import get_db

bp = Blueprint('entorno', __name__, url_prefix='/api/entornos')

@bp.route('/', methods=('GET', 'POST'))
def index():
    db = get_db()
    if request.method == 'GET':
        entornos = db.execute(
            """SELECT entorno_id, entorno_nombre, 
            sector_nombre, sector_piso FROM entornos_completos 
            ORDER BY sector_nombre, sector_piso, entorno_nombre"""
        ).fetchall()
        return jsonify(entornos=entornos)
    elif request.method == 'POST':
        entorno = request.json['entorno']
        nombre = entorno['nombre']
        sector = entorno['sector']
        db.execute(
            """INSERT INTO ubicaciones(sector, tipo_ubicacion) 
                VALUES (?, (SELECT id FROM tipos_ubicacion WHERE tipo = "entorno"))""" ,
            (sector,)
        )
        db.execute(
            """INSERT INTO entornos(nombre, ubicacion) 
                VALUES (?, last_insert_rowid())""" ,
            (nombre, )
        )
        db.commit();
        ## TODO chequear errores
        return jsonify(entorno=url_for('entorno.detail', nombre=nombre))

        

@bp.route('/<string:nombre>/', methods=('GET', 'DELETE'))
def detail(nombre):
    db = get_db()

    if request.method == 'GET':
        entorno = db.execute(
    """SELECT entorno_id, entorno_nombre, 
            sector_nombre, sector_piso FROM entornos_completos 
            WHERE entorno_nombre = ?""",
            (nombre,)
        ).fetchone()
        if entorno == None:
            abort(404, 'Entorno inexistente')
        return jsonify(entorno=entorno)
    elif request.method == 'DELETE':
        entorno = db.execute(
        """SELECT entorno_id FROM entornos_completos 
            WHERE entorno_nombre = ?""" ,
            (nombre,)
        ).fetchone()
        if entorno == None:
            abort(404, 'Entorno inexistente')
        db.execute(
            """DELETE FROM ubicaciones WHERE id = 
                (SELECT ubicacion FROM entornos WHERE nombre = ?)""" ,
            (nombre,)
        )
        db.execute(
            """DELETE FROM entornos WHERE nombre = ?""" ,
            (nombre,)
        )
        db.commit()
        return jsonify(id=entorno['entorno_id'])
