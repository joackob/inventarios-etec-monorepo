DROP TABLE IF EXISTS items_en_ubicacion;
CREATE TABLE items_en_ubicacion (
  "item_id" INTEGER,
  "ubicacion_id" INTEGER,
  "cantidad" INTEGER,
  PRIMARY KEY (item_id, ubicacion_id),
  FOREIGN KEY (item_id) REFERENCES items(id),
  FOREIGN KEY (ubicacion_id) REFERENCES ubicaciones(id)
);

DROP TABLE IF EXISTS items;
CREATE TABLE items (
	"id"	INTEGER PRIMARY KEY AUTOINCREMENT,
	"nombre"	TEXT NOT NULL,
	"marca" TEXT,
  "numero_serie" TEXT
);

DROP TABLE IF EXISTS entornos;
CREATE TABLE entornos (
	"id"	INTEGER PRIMARY KEY AUTOINCREMENT,
	"nombre"	TEXT NOT NULL UNIQUE,
	"ubicacion"	INTEGER NOT NULL,
  FOREIGN KEY (ubicacion) REFERENCES ubicaciones(id)
);

DROP TABLE IF EXISTS depositos;
CREATE TABLE depositos (
	"id"	INTEGER PRIMARY KEY AUTOINCREMENT,
	"nombre"	TEXT NOT NULL UNIQUE, 
	"ubicacion"	INTEGER NOT NULL,
  FOREIGN KEY (ubicacion) REFERENCES ubicaciones(id)
);

DROP TABLE IF EXISTS ubicaciones;
CREATE TABLE ubicaciones (
	"id"	INTEGER PRIMARY KEY AUTOINCREMENT,
	"sector"	INTEGER NOT NULL,
	"tipo_ubicacion"	INTEGER NOT NULL,
  FOREIGN KEY (sector) REFERENCES sectores(id),
  FOREIGN KEY (tipo_ubicacion) REFERENCES tipos_ubicacion(id)
);

DROP TABLE IF EXISTS tipos_ubicacion;
CREATE TABLE tipos_ubicacion (
	"id"	INTEGER PRIMARY KEY AUTOINCREMENT,
	"tipo"	TEXT NOT NULL
);

DROP TABLE IF EXISTS sectores;
CREATE TABLE sectores (
	"id"	INTEGER PRIMARY KEY AUTOINCREMENT,
	"nombre"	TEXT NOT NULL,
  "piso" INTEGER NOT NULL,
  UNIQUE ("nombre", "piso")
);

DROP VIEW IF EXISTS ubicaciones_con_tipo;
CREATE VIEW ubicaciones_con_tipo AS 
  SELECT u.id AS ubicacion_id, tu.tipo as ubicacion_tipo, 
    u.sector AS sector_id, 
    s.nombre AS sector_nombre, s.piso AS sector_piso 
    FROM ubicaciones u JOIN tipos_ubicacion tu
      ON u.tipo_ubicacion = tu.id
      JOIN sectores s
      ON s.id = u.sector;

DROP VIEW IF EXISTS entornos_completos;
CREATE VIEW entornos_completos AS 
  SELECT e.id AS entorno_id, e.nombre AS entorno_nombre, 
	u.ubicacion_id, u.ubicacion_tipo, 
	u.sector_nombre, u.sector_piso 
    FROM entornos e JOIN ubicaciones_con_tipo u 
      ON e.ubicacion = u.ubicacion_id;

INSERT INTO sectores(nombre, piso) VALUES ("biblioteca", 0), ("peine 1", 0), ("peine 1", 1),
        ("peine 2", 0), ("peine 2", 1), ("peine 3", 0), ("peine 3", 1),
        ("peine 2/3", 0), ("peine 2/3", 1);
INSERT INTO tipos_ubicacion(tipo) VALUES ("entorno"), ("depósito");

INSERT INTO ubicaciones(sector, tipo_ubicacion) VALUES 
  ((SELECT id FROM sectores WHERE nombre = "biblioteca"),
   (SELECT id FROM tipos_ubicacion WHERE tipo = "entorno"));
INSERT INTO entornos(nombre,ubicacion) VALUES ("ttr", last_insert_rowid());

INSERT INTO ubicaciones(sector, tipo_ubicacion) VALUES 
  ((SELECT id FROM sectores WHERE nombre = "peine 1" AND piso = 0),
   (SELECT id FROM tipos_ubicacion WHERE tipo = "entorno"));
INSERT INTO entornos(nombre,ubicacion) VALUES ("101", last_insert_rowid());
INSERT INTO ubicaciones(sector, tipo_ubicacion) VALUES 
  ((SELECT id FROM sectores WHERE nombre = "peine 1" AND piso = 0),
   (SELECT id FROM tipos_ubicacion WHERE tipo = "entorno"));
INSERT INTO entornos(nombre,ubicacion) VALUES ("102", last_insert_rowid());
INSERT INTO ubicaciones(sector, tipo_ubicacion) VALUES 
  ((SELECT id FROM sectores WHERE nombre = "peine 1" AND piso = 0),
   (SELECT id FROM tipos_ubicacion WHERE tipo = "entorno"));
INSERT INTO entornos(nombre,ubicacion) VALUES ("103", last_insert_rowid());
INSERT INTO ubicaciones(sector, tipo_ubicacion) VALUES 
  ((SELECT id FROM sectores WHERE nombre = "peine 1" AND piso = 0),
   (SELECT id FROM tipos_ubicacion WHERE tipo = "entorno"));
INSERT INTO entornos(nombre,ubicacion) VALUES ("104", last_insert_rowid());
INSERT INTO ubicaciones(sector, tipo_ubicacion) VALUES 
  ((SELECT id FROM sectores WHERE nombre = "peine 1" AND piso = 0),
   (SELECT id FROM tipos_ubicacion WHERE tipo = "entorno"));
INSERT INTO entornos(nombre,ubicacion) VALUES ("105", last_insert_rowid());


INSERT INTO ubicaciones(sector, tipo_ubicacion) VALUES 
  ((SELECT id FROM sectores WHERE nombre = "peine 1" AND piso = 1),
   (SELECT id FROM tipos_ubicacion WHERE tipo = "entorno"));
INSERT INTO entornos(nombre,ubicacion) VALUES ("111", last_insert_rowid());
INSERT INTO ubicaciones(sector, tipo_ubicacion) VALUES 
  ((SELECT id FROM sectores WHERE nombre = "peine 1" AND piso = 1),
   (SELECT id FROM tipos_ubicacion WHERE tipo = "entorno"));
INSERT INTO entornos(nombre,ubicacion) VALUES ("112", last_insert_rowid());
INSERT INTO ubicaciones(sector, tipo_ubicacion) VALUES 
  ((SELECT id FROM sectores WHERE nombre = "peine 1" AND piso = 1),
   (SELECT id FROM tipos_ubicacion WHERE tipo = "entorno"));
INSERT INTO entornos(nombre,ubicacion) VALUES ("113", last_insert_rowid());
INSERT INTO ubicaciones(sector, tipo_ubicacion) VALUES 
  ((SELECT id FROM sectores WHERE nombre = "peine 1" AND piso = 1),
   (SELECT id FROM tipos_ubicacion WHERE tipo = "entorno"));
INSERT INTO entornos(nombre,ubicacion) VALUES ("114", last_insert_rowid());
INSERT INTO ubicaciones(sector, tipo_ubicacion) VALUES 
  ((SELECT id FROM sectores WHERE nombre = "peine 1" AND piso = 1),
   (SELECT id FROM tipos_ubicacion WHERE tipo = "entorno"));
INSERT INTO entornos(nombre,ubicacion) VALUES ("115", last_insert_rowid());
INSERT INTO ubicaciones(sector, tipo_ubicacion) VALUES 
  ((SELECT id FROM sectores WHERE nombre = "peine 1" AND piso = 1),
   (SELECT id FROM tipos_ubicacion WHERE tipo = "entorno"));
INSERT INTO entornos(nombre,ubicacion) VALUES ("ODS", last_insert_rowid());
-- "ODS: oficina de soporte"
INSERT INTO ubicaciones(sector, tipo_ubicacion) VALUES 
  ((SELECT id FROM sectores WHERE nombre = "peine 2" AND piso = 0),
   (SELECT id FROM tipos_ubicacion WHERE tipo = "entorno"));
INSERT INTO entornos(nombre,ubicacion) VALUES ("201", last_insert_rowid());
INSERT INTO ubicaciones(sector, tipo_ubicacion) VALUES 
  ((SELECT id FROM sectores WHERE nombre = "peine 2" AND piso = 0),
   (SELECT id FROM tipos_ubicacion WHERE tipo = "entorno"));
INSERT INTO entornos(nombre,ubicacion) VALUES ("202", last_insert_rowid());
INSERT INTO ubicaciones(sector, tipo_ubicacion) VALUES 
  ((SELECT id FROM sectores WHERE nombre = "peine 2" AND piso = 0),
   (SELECT id FROM tipos_ubicacion WHERE tipo = "entorno"));
INSERT INTO entornos(nombre,ubicacion) VALUES ("203", last_insert_rowid());
INSERT INTO ubicaciones(sector, tipo_ubicacion) VALUES 
  ((SELECT id FROM sectores WHERE nombre = "peine 2" AND piso = 0),
   (SELECT id FROM tipos_ubicacion WHERE tipo = "entorno"));
INSERT INTO entornos(nombre,ubicacion) VALUES ("204", last_insert_rowid());
INSERT INTO ubicaciones(sector, tipo_ubicacion) VALUES 
  ((SELECT id FROM sectores WHERE nombre = "peine 2" AND piso = 0),
   (SELECT id FROM tipos_ubicacion WHERE tipo = "entorno"));
INSERT INTO entornos(nombre,ubicacion) VALUES ("205", last_insert_rowid());

INSERT INTO ubicaciones(sector, tipo_ubicacion) VALUES 
  ((SELECT id FROM sectores WHERE nombre = "peine 2" AND piso = 1),
   (SELECT id FROM tipos_ubicacion WHERE tipo = "entorno"));
INSERT INTO entornos(nombre,ubicacion) VALUES ("215", last_insert_rowid());
INSERT INTO ubicaciones(sector, tipo_ubicacion) VALUES 
  ((SELECT id FROM sectores WHERE nombre = "peine 2" AND piso = 1),
   (SELECT id FROM tipos_ubicacion WHERE tipo = "entorno"));
INSERT INTO entornos(nombre,ubicacion) VALUES ("211", last_insert_rowid());
INSERT INTO ubicaciones(sector, tipo_ubicacion) VALUES 
  ((SELECT id FROM sectores WHERE nombre = "peine 2" AND piso = 1),
   (SELECT id FROM tipos_ubicacion WHERE tipo = "entorno"));
INSERT INTO entornos(nombre,ubicacion) VALUES ("212", last_insert_rowid());
INSERT INTO ubicaciones(sector, tipo_ubicacion) VALUES 
  ((SELECT id FROM sectores WHERE nombre = "peine 2" AND piso = 1),
   (SELECT id FROM tipos_ubicacion WHERE tipo = "entorno"));
INSERT INTO entornos(nombre,ubicacion) VALUES ("213", last_insert_rowid());
INSERT INTO ubicaciones(sector, tipo_ubicacion) VALUES 
  ((SELECT id FROM sectores WHERE nombre = "peine 2" AND piso = 1),
   (SELECT id FROM tipos_ubicacion WHERE tipo = "entorno"));
INSERT INTO entornos(nombre,ubicacion) VALUES ("214", last_insert_rowid());

INSERT INTO ubicaciones(sector, tipo_ubicacion) VALUES 
  ((SELECT id FROM sectores WHERE nombre = "peine 3" AND piso = 0),
   (SELECT id FROM tipos_ubicacion WHERE tipo = "entorno"));
INSERT INTO entornos(nombre,ubicacion) VALUES ("301", last_insert_rowid());
INSERT INTO ubicaciones(sector, tipo_ubicacion) VALUES 
  ((SELECT id FROM sectores WHERE nombre = "peine 3" AND piso = 0),
   (SELECT id FROM tipos_ubicacion WHERE tipo = "entorno"));
INSERT INTO entornos(nombre,ubicacion) VALUES ("302", last_insert_rowid());
INSERT INTO ubicaciones(sector, tipo_ubicacion) VALUES 
  ((SELECT id FROM sectores WHERE nombre = "peine 3" AND piso = 0),
   (SELECT id FROM tipos_ubicacion WHERE tipo = "entorno"));
INSERT INTO entornos(nombre,ubicacion) VALUES ("303", last_insert_rowid());

INSERT INTO ubicaciones(sector, tipo_ubicacion) VALUES 
  ((SELECT id FROM sectores WHERE nombre = "peine 3" AND piso = 1),
   (SELECT id FROM tipos_ubicacion WHERE tipo = "entorno"));
INSERT INTO entornos(nombre,ubicacion) VALUES ("311", last_insert_rowid());
INSERT INTO ubicaciones(sector, tipo_ubicacion) VALUES 
  ((SELECT id FROM sectores WHERE nombre = "peine 3" AND piso = 1),
   (SELECT id FROM tipos_ubicacion WHERE tipo = "entorno"));
INSERT INTO entornos(nombre,ubicacion) VALUES ("312", last_insert_rowid());
INSERT INTO ubicaciones(sector, tipo_ubicacion) VALUES 
  ((SELECT id FROM sectores WHERE nombre = "peine 3" AND piso = 1),
   (SELECT id FROM tipos_ubicacion WHERE tipo = "entorno"));
INSERT INTO entornos(nombre,ubicacion) VALUES ("313", last_insert_rowid());
INSERT INTO ubicaciones(sector, tipo_ubicacion) VALUES 
  ((SELECT id FROM sectores WHERE nombre = "peine 3" AND piso = 1),
   (SELECT id FROM tipos_ubicacion WHERE tipo = "entorno"));
INSERT INTO entornos(nombre,ubicacion) VALUES ("314", last_insert_rowid());
INSERT INTO ubicaciones(sector, tipo_ubicacion) VALUES 
  ((SELECT id FROM sectores WHERE nombre = "peine 3" AND piso = 1),
   (SELECT id FROM tipos_ubicacion WHERE tipo = "entorno"));
INSERT INTO entornos(nombre,ubicacion) VALUES ("315", last_insert_rowid());

INSERT INTO ubicaciones(sector, tipo_ubicacion) VALUES 
  ((SELECT id FROM sectores WHERE nombre = "peine 1" AND piso = 0),
   (SELECT id FROM tipos_ubicacion WHERE tipo = "depósito"));
INSERT INTO depositos(nombre, ubicacion) VALUES ("auxiliar-ciclobasico", last_insert_rowid());
INSERT INTO ubicaciones(sector, tipo_ubicacion) VALUES 
  ((SELECT id FROM sectores WHERE nombre = "peine 2" AND piso = 0),
   (SELECT id FROM tipos_ubicacion WHERE tipo = "depósito"));
INSERT INTO depositos(nombre, ubicacion) VALUES ("auxiliar-tic", last_insert_rowid());
INSERT INTO ubicaciones(sector, tipo_ubicacion) VALUES 
  ((SELECT id FROM sectores WHERE nombre = "peine 3" AND piso = 0),
   (SELECT id FROM tipos_ubicacion WHERE tipo = "depósito"));
INSERT INTO depositos(nombre, ubicacion) VALUES ("auxiliar-meca", last_insert_rowid());
INSERT INTO ubicaciones(sector, tipo_ubicacion) VALUES 
  ((SELECT id FROM sectores WHERE nombre = "peine 2/3" AND piso = 1),
   (SELECT id FROM tipos_ubicacion WHERE tipo = "depósito"));
INSERT INTO depositos(nombre, ubicacion) VALUES ("principal-tic", last_insert_rowid());
INSERT INTO ubicaciones(sector, tipo_ubicacion) VALUES 
  ((SELECT id FROM sectores WHERE nombre = "peine 2/3" AND piso = 0),
   (SELECT id FROM tipos_ubicacion WHERE tipo = "depósito"));
INSERT INTO depositos(nombre, ubicacion) VALUES ("principal-meca", last_insert_rowid());

-- ITEMS en la biblioteca
INSERT INTO items(nombre, marca, numero_serie)  
  VALUES ("monitor", "philips", "1235"),
          ("monitor", "philips", "1236"),
          ("teclado", "logitech", "1237"),
          ("teclado", "logitech", "1238"),
          ("mouse", "logitech", "1239"),
          ("mouse", " logitech", "1224"),
          ("computadora", "lenovo", "1214"),
          ("computadora", "lenovo", "1294");

-- ITEMS en la 101
INSERT INTO items(nombre) 
  VALUES ("mesa"),
          ("pizarrón");

INSERT INTO items_en_ubicacion(ubicacion_id, item_id, cantidad)
  VALUES ((SELECT ubicacion FROM entornos WHERE nombre = "101"),
          (SELECT id FROM items WHERE nombre = "mesa"),
          8);

INSERT INTO items_en_ubicacion(ubicacion_id, item_id, cantidad)
  VALUES ((SELECT ubicacion FROM entornos WHERE nombre = "101"),
          (SELECT id FROM items WHERE nombre = "pizarrón"),
          1);

-- agregar algunos items en depositos