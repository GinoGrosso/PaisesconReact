# Rúbrica de Evaluación

**Puntaje Total: 100 puntos**

### 1. React Router - Navegación (10 puntos)
- Rutas: `/`, `/recientes`, `/pais/:cca3`, `*` (404)
- Uso correcto de `useNavigate()` y `useParams()`

### 2. useState - Manejo de Estado Local (10 puntos)
- Estados para: países, filtros, detalles, carga, errores

### 3. useEffect - Efectos y Carga de Datos (10 puntos)
- Carga de datos desde la API
- Dependencias correctas
- Manejo de errores

### 4. useContext - Estado Global (15 puntos)
- `PaisesRecientesContext` funcional
- Persistencia en `localStorage`
- Máximo 15 países, sin duplicados

### 5. Custom Hook - usePaisesRecientes (10 puntos)
- Hook personalizado encapsulando lógica de países recientes

### 6. Página Principal - Home (10 puntos)
- Lista de países con filtros funcionando
- Búsqueda con debounce
- Navegación a detalles

### 7. Página de Recientes (10 puntos)
- Muestra últimos países vistos (máximo 15)
- Ordenados de más reciente a más antiguo
- Usa contexto correctamente

### 8. Página de Detalles - PaisDetail (10 puntos)
- Obtiene código CCA3 de URL con `useParams()`
- Muestra todos los detalles del país
- Agrega automáticamente a recientes

### 9. Comunicación con API (10 puntos)
- Peticiones correctas a todos los endpoints
- Manejo de errores y estados de carga

### 10. Modularidad y Organización (5 puntos)
- Código organizado, componentes separados, sin duplicación

## Criterios de Desaprobación Automática

El proyecto será desaprobado si:
- ❌ La aplicación no ejecuta o tiene errores críticos
- ❌ No se implementa el sistema de países recientes con Context API
- ❌ No se comunica con la API del servidor (usa archivos JSON estáticos)

## Bonus (Hasta 10 puntos adicionales)

- **+4 puntos**: Botón para limpiar historial de países recientes
- **+6 puntos**: Mostrar países similares en la página de detalles (mismo continente o idioma)

