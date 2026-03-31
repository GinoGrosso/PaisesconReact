# Examen: Conversión de Aplicación de Atlas Digital a React

## Introducción

Completar la implementación de una aplicación de visualización de países desarrollada en **React**.

**IMPORTANTE**: El esqueleto completo del proyecto ya está creado. Tu tarea es **implementar las funcionalidades**

Debes usar: `useState`, `useEffect`, `react-router`, `useNavigate`, `useContext`, y **Custom Hooks**.

## Servidor API

**IMPORTANTE**: El servidor API mock debe estar corriendo antes de iniciar la aplicación.

### Iniciar el Servidor

```bash
cd server
npm install  # Solo la primera vez
node mockServer.js
```

El servidor correrá en `http://localhost:3000` y la API en `http://localhost:3000/api/`.

### Endpoints Disponibles

- `GET /api/paises` - Obtiene todos los países (filtros: `?continente=Américas&idioma=Español&buscar=argentina`)
- `GET /api/paises/:cca3` - Obtiene un país por código CCA3
- `GET /api/continentes` - Obtiene todas las regiones/continentes
- `GET /api/idiomas` - Obtiene todos los idiomas disponibles

**Asegúrate de que el servidor API esté corriendo antes de iniciar el desarrollo.**

## Archivos a Implementar

Completa la funcionalidad en los siguientes archivos:

1. **`react/src/services/api.js`** - Implementar funciones: `getPaises(filtros)`, `getPais(cca3)`, `getContinentes()`, `getIdiomas()`
   - Todas las peticiones a `http://localhost:3000/api/`

2. **`react/src/context/PaisesRecientesContext.jsx`** - Implementar:
   - Cargar desde `localStorage` al iniciar
   - Guardar en `localStorage` cuando cambien
   - `agregarPaisReciente(cca3)` 
   - `limpiarRecientes()`

3. **`react/src/pages/Home.jsx`** - Implementar:
   - Cargar países desde la API cuando cambien los filtros
   - Manejar estados de carga y error
   - Debounce para la búsqueda (opcional)

4. **`react/src/components/Filtros.jsx`** - Implementar:
   - Cargar continentes e idiomas desde la API
   - Llamar a `onFilterChange` cuando cambien los filtros

5. **`react/src/components/PaisCard.jsx`** - Implementar:
   - `handleClick` usando `useNavigate()` para navegar a `/pais/:cca3`

6. **`react/src/pages/Recientes.jsx`** - Implementar:
   - Cargar detalles de cada país reciente desde la API usando códigos CCA3 del contexto

7. **`react/src/pages/PaisDetail.jsx`** - Implementar:
   - Cargar país usando `useParams()` para obtener código CCA3
   - Agregar país a recientes cuando se cargue
   - Mostrar idiomas, monedas y descripción de la bandera

**Nota**: `NotFound.jsx` ya está implementado. Solo verifica que funcione.

## Requerimientos Funcionales

- Visualización de países desde la API con filtros (continente, idioma, búsqueda)
- Países recientes: máximo 15, persistir en `localStorage`, sin duplicados
- Navegación entre páginas: Home (`/`), Recientes (`/recientes`), Detalles (`/pais/:cca3`), 404 (`*`)
- Manejo de errores y estados de carga
- Diseño responsive

## Entrega

Subir el proyecto a **GitHub** y compartirlo con los siguientes usuarios de GitHub:
- @fabiodrizzt
- @fer24sanchez
- @gabrielaebejarano

**Nota**: No se requiere documentación adicional.
