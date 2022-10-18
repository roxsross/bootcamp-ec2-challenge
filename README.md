## TÍTULO DE LA ACTIVIDAD: Montado de aplicación de nodejs en AWS EC2

## TEXTO DE LA ACTIVIDAD

La empresa ZeroTech les solicita como DevOps Trainer/Jr instalar en un ambiente productivo una aplicacion nodejs sobre un servidor ubuntu en "AWS EC2" ya que piensan en cara de una migración on-premise - cloud y necesitan escalar con alta disponibilidad, luego de muchas reuniones con el equipo de arquitectos se define que la aplicacion debe estar sobre aws ec2 como primer paso porque su objetivo es dockererizar y desplegar en ECS o EKS.

La instancia permite lanzar la aplicación desde la consola de AWS. La máquina virtual o instancia de Amazon debe prepararse con un sistema operativo Ubuntu, donde se instalará Node , Nginx y otras herramientas que necesitaremos. Con la AWS console, modificaremos la máquina para que el servidor nos comunique la máquina con el exterior por una IP pública para que pueda lanzarse en internet. 

## PASOS PARA CREAR UNA INSTANCIA DE EC2 DESDE LA CONSOLA
- En el panel de EC2 encontrarás unas ventanas con herramientas según tu necesidad. En este caso, utiliza la opción de «Instancias (en ejecución)» para crear una. Una vez cliques en esta opción, te aparecerá un panel de instancias donde aún no te aparecerá ninguna, si es tu primera vez lanzando una aplicacion nodejs.

- En la parte superior derecha hay un botón naranja que te permitirá lanzar una instancia. Deberás clicar y, en la ventana que saldrá, podrás crear una instancia nueva.
En el panel para crear la instancia hay una serie de opciones con sistemas operativos o Amazon Machine Image (AMI). Deberás escoger la opción que está etiquetada como: Ubuntu Ultima Version, SSD Volume Type.

- Si bien después saldrá una ventana para escoger el tipo de instancia, escoger la opción  Tamaño t3.medium. Una vez seleccionado, le das a Siguiente: Configurar Detalles de Instancia; NO a Revisar y Lanzar.

- La siguiente ventana, el paso 3, es para configurar los detalles de la instancia. En este paso dejarás todas las configuraciones como vienen por defecto. Puedes revisar cada una para ver cómo se configurará la instancia. Después, harás clic en el botón para dirigirte al siguiente paso.

- La siguiente ventana, en el paso 4, está etiquetada como «Adición de almacenamiento». Allí podrás configurar el dispositivo de almacenamiento de hasta 30 GIB

- El paso 5 es el de Agregar etiquetas, pero en este paso optaremos por no agregarle ninguna etiqueta a nuestra máquina, pues solo tendremos una.

- La siguiente ventana es la página para configurar el Security Group de nuestra instancia, donde debes estar seguro de que haya acceso al puerto 22 para la conexión SSH, preferiblemente crear previamente el security group con los puertos necesarios para que la aplicacion funcione.

- Una vez completados y revisados los pasos anteriores, podrás finalmente pasar a «Revisar y lanzar». 

## DESAFIOS Y REQUISITOS

- Instalacion de node en su ultima version a traves de user-data 

- clonar el repositorio de la aplicación y hacer funciona la aplicación para que quede en segundo plano.

- Opcional instalar nginx

- Opcional instalar certificados

- Opcional usar wildcard gratuitos: xip.io, nip.io, sslip.io

- Opcional configurar un script en bash para crear instancia ec2 con aws-cli

- Opcional crear la instancia ec2 con iac cloudformation

- Realicen todas las configuraciones que consideren necesario aplicando buenas practicas.

- Diseñar un diagrama pequeño con los componentes usado en la arquitectura como referencia pueden seguir esta documentacion [Arquitectura AWS](https://aws.amazon.com/es/getting-started/hands-on/deploy-nodejs-web-app/)

## FUNCIONAMIENTO DE LA APLICACIÓN
### LOCAL   IT WORKS on My Machine
- npm install 
- npm run start
- localhost:8080

## ROUTES DE LA APLICACION
```
GET /
GET /app
GET /api/alta-consola
POST /api/alta-consola
GET /api/consulta-consola
```

## SOLUCION

<img src="https://github.com/roxsross/bootcamp-ec2-challenge/raw/master/doc/1.png" alt="1" />

<img src="https://github.com/roxsross/bootcamp-ec2-challenge/raw/master/doc/2.png" alt="2" />

<img src="https://github.com/roxsross/bootcamp-ec2-challenge/raw/master/doc/3.png" alt="3" />

<img src="https://github.com/roxsross/bootcamp-ec2-challenge/raw/master/doc/4.png" alt="4" />

<img src="https://github.com/roxsross/bootcamp-ec2-challenge/raw/master/doc/5.png" alt="5" />

<img src="https://github.com/roxsross/bootcamp-ec2-challenge/raw/master/doc/6.png" alt="6" />

## EVALUACIÓN

* Subir al repositorio "imagenes" "Pantallazos" de la solucíon 
* Pasos de como funciona en la puesta de producción
* Arquitectura
* user-data
* Para documentacion usar esquema con Maskdown [Docu](https://docs.github.com/es/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)

## TIEMPO ESTIMADO PARA REALIZAR LA ACTIVIDAD

2 hora
