# Graduates Hybrid Workshop

El objetivo del ejercicio será crear una aplicación del tiempo utilizando [React Native](https://facebook.github.io/react-native/).

![weather app](https://raw.githubusercontent.com/josex2r/graduates-hybrid-workshop/template/src/img/weather.gif)

## Objetivos

### Apariencia

- Modificar el componente `HomeScreen` para crear la vista inicial.
- Conseguir que al hacer **click** en cualquier parte de la vista principal realice una transición al componente `WeatherScreen`.
- Crear un widget del tiempo parecido al del ejemplo en el que se aparezcan:
  - El nombre de la ciudad actual.
  - Una **imagen** acorde al clima.
  - La **temperatura**.
  - Otros datos adicionales como pueden ser la **humedad**, **tiempo** o **presión**.
- Colocar debajo del widget un listado con las ciudades que se encuentran en el fichero [./src/json/cities.json](./src/json/cities.json).

### Funcionalidad

- El widget mostrará información del tiempo de la posición actual, para ello se solicitarán las coordenadas por gps y se invocará a [openweathermap.org/api](https://openweathermap.org/api) para obtener los datos necesarios con los que "rellenar" el widget.
  > Puedes utilizar las funciones de [./src/utils/](./src/utils/) para obtener las coordenadas y los datos del tiempo.
- Al pulsar en alguna ciudad del listado el widget mostrará los datos asociados a dicha ciudad.

## Solución

En la rama [#master](https://github.com/josex2r/graduates-hybrid-workshop/tree/master) se encuentra una posible solución al ejercicio.

## Instalación

```bash
git clone https://github.com/josex2r/graduates-hybrid-workshop.git

cd graduates-hybrid-workshop

npm install

# Asegúrate de arrancar el emulador o conectar tu dispositivo antes de ejecutar el siguiente comando
npm run android
```

## Problemas comunes

**No tengo instalado el SDK 23 de Android**

```bash
~/Library/Android/sdk/tools/bin/sdkmanager --install "build-tools;23.0.1" "platforms;android-23"
```

**No he aceptado las licencias del SDK de Android**

```bash
~/Library/Android/sdk/tools/bin/sdkmanager --licenses
```

**Al ejecutar el debugger se queda la pantalla en blanco**

```
CMD + M => DevTools => localhost:8081
```
