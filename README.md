<h1>Houser App</h1>

<p><b>Rutas:</b></p>

<ul>

### LOGIN ###
<li>Loguea Usuario => Ruta: api/auth/login</li>
<li>Registrar Nuevo Usuario => Ruta: api/auth/signup</li>
<li>Desloguea Usuario => Ruta: api/auth/logout</li>

### USERS PROFILE ###
<li>Trae el Perfil del Usuario => Ruta: api/users/{id}</li>

<li>Edita el Perfil del Usuario => Ruta: api/users/{id}/profile</li>

### SERVICES ###
<li>Trae el listado de Servicios => Ruta: api/services</li>

<li>Trae Los Servicios por ID => Ruta: service/{id}</li>

<li>Retorna los Housers por Servicios => Ruta: services/housers/{id}</li>

### ORDERS ###
<li>Retorna todos los Orders por Usuario => Ruta seria: api/orders/users/{id}</li>

<li>Genera y guarda en DB Orden de Trabajos al Houser => Ruta seria: api/orders/request</li>

<li>Genera y guarda en DB Orden de Trabajos al Houser => Ruta seria: api/orders/save</li>

<li>Cambia Estado de la Orden de Pedido => Ruta: api/orders/{idorder}/{status}</li>
</ul>
