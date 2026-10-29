# Ficha de Participación y Guion del Pitch (3 min)
**VIII Simposio de Investigación — Mesa: Jóvenes Investigadores en Acción**  
**Jueves 29 de octubre de 2026 – 19:00 hs – Laboratorio C de Informática**

---

## 1. Ficha de Participación (según pautas de la Circular)

- **Título del trabajo:** Agentes de IA y Protocolo MCP para evaluación continua y autoevaluación en materias de Ingeniería en Informática
- **Autores:**
  - **Ing. Fabio Damián Argañaraz Azua** (Director) — UCSE-DASS / FI-UNJu — `fabiodamian.arganarazazua@ucse.edu.ar`
  - **Ing. Gabriela Bejarano** (Asesora Metodológica) — UCSE-DASS — `gabriela.bejarano@ucse.edu.ar`
  - **Samara Zamar** (Estudiante Investigadora) — UCSE-DASS — `samarazamar@alumnos.ucse.edu.ar`
  - **Mariano Alfredo Sumbaino** (Estudiante Investigador) — UCSE-DASS — `marianoalfredo.sumbaino@alumnos.ucse.edu.ar`
  - **Gino Angelo Grosso** (Estudiante Investigador) — UCSE-DASS — `ginoangelogrosso@alumnos.ucse.edu.ar`
- **Pertenencia institucional:** Gabinete de Investigación en Informática y Tecnología (GIyT), Departamento Académico San Salvador, Universidad Católica de Santiago del Estero (UCSE), con aplicación interinstitucional en la Facultad de Ingeniería de la Universidad Nacional de Jujuy (UNJu).
- **Convocatoria:** Iniciación a la Investigación 2025–2026 (UCSE-DASS).
- **Área temática:** Informática y Transformación Digital / Educación en Ingeniería e Inteligencia Artificial.
- **Estado de avance:** **Resultados preliminares**.
- **Palabras clave (5):** Evaluación formativa continua, Agentes de inteligencia artificial, Model Context Protocol (MCP), Spec-Driven Development (SDD), Educación en ingeniería informática.
- **Enlaces del proyecto:**
  - **Portal web y demos interactivas:** https://sites.google.com/fi.unju.edu.ar/integracion-de-agentes-de-ia/
  - **Repositorio plantilla de acceso abierto:** https://github.com/Taller-de-Agentes-de-IA-en-docencia/plantilla-taller-docente-mcp
- **Necesidades técnicas:** Conexión a internet para las demos web opcionales (se lleva versión local en navegador e imágenes de respaldo en pendrive; no requiere audio).
- **Correo institucional de contacto:** `fabiodamian.arganarazazua@ucse.edu.ar`

### Biodata abreviada del expositor (para lectura de moderación)
**Fabio Damián Argañaraz** es Ingeniero en Informática por la Universidad Nacional de Jujuy (UNJu), distinguido con la Medalla al Mejor Promedio de su promoción, desarrollador de software *Full Stack* y especialista en tecnología educativa (*EdTech*). Cuenta con más de nueve años de trayectoria docente en educación superior y formación profesional (UCSE, UNJu, UNTREF, Digital House y ADA School). Actualmente se desempeña como profesor de *Algoritmos y Programación*, *Programación II* y *Modelos y Simulación* en el Departamento Académico San Salvador de la UCSE, y como Jefe de Trabajos Prácticos de *Sistemas Operativos II* y *Teoría de los Sistemas Operativos* en la Facultad de Ingeniería de la UNJu. Es director del proyecto de Iniciación a la Investigación (GIyT, UCSE-DASS) sobre integración de Agentes de Inteligencia Artificial y el protocolo abierto MCP para evaluación formativa continua y autoevaluación en carreras de Ingeniería en Informática.

### Resumen (284 palabras — dentro del rango de 250 a 300 palabras)
En las asignaturas de programación y sistemas de Ingeniería en Informática, brindar retroalimentación formativa oportuna y diseñar evaluaciones equivalentes para cohortes cercanas a los cien estudiantes supera con frecuencia la disponibilidad horaria de los equipos docentes. Al mismo tiempo, el uso informal de chatbots comerciales mediante *prompts* aislados introduce alucinaciones, falta de reproducibilidad y criterios dispares de corrección. Este proyecto tiene como objetivo diseñar, implementar y validar un ecosistema sociotécnico de evaluación continua y autoevaluación asistido por agentes de Inteligencia Artificial y el estándar abierto *Model Context Protocol* (MCP), preservando en todo momento la supervisión docente activa (*Human-in-the-Loop*). Metodológicamente, bajo un diseño de investigación-acción e Investigación Basada en el Diseño, se estructuró una arquitectura en tres capas: gobernanza contextual mediante archivos declarativos versionados (`AGENTS.md`, `MEMORY.md`, rúbricas analíticas y especificaciones *Spec-Driven Development*), interoperabilidad local de solo lectura mediante servidores MCP confinados bajo lineamientos OWASP, y flujos de autoevaluación continua en GitHub Actions y ClassMoji. El sistema fue desplegado y puesto a prueba en cinco asignaturas de dos universidades de Jujuy: *Algoritmos y Programación*, *Programación II* y *Modelos y Simulación* en la UCSE-DASS, y *Sistemas Operativos II* y *Teoría de los Sistemas Operativos* en la UNJu, alcanzando a alrededor de cien estudiantes. Los resultados preliminares del primer semestre en *Programación II* (24 estudiantes a lo largo de 23 micro-entregas) muestran que el 91,7 % (22 de 24) sostuvo un ritmo positivo de entregas por encima del umbral de regularidad (media de 80 puntos y 66,7 % en rango de promoción), realizando entre 3 y 5 ciclos de autocorrección por trabajo y reduciendo prácticamente a cero las entregas con fallos de compilación. Asimismo, se transfirieron 35 simuladores web autocontenidos y se capacitó a 70 docentes universitarios en un taller práctico de diez horas reloj.

---

## 2. Guion Cronometrado para el Pitch de 3 Minutos

> **Atajos en la presentación (`presentacion/index.html`):**
> - Presionar **`T`** al comenzar para iniciar el cronómetro visual de `3:00` en la esquina superior derecha (`R` para reiniciar).
> - Presionar **`S`** para abrir la ventana de notas del orador.
> - Flechas **`→`** para avanzar el pitch principal (diapositivas 1 a 9) y **`↓`** en las diapositivas 4 u 8 si en las preguntas consultan por seguridad OWASP o lecciones aprendidas.

1. **Apertura y Problema (0:00 – 0:35 · Diapositivas 1 y 2):**
   - *"Buenas noches, soy Fabio Argañaraz. En cátedras de informática de Jujuy —como Sistemas Operativos II en la UNJu, con alrededor de 100 alumnos por cohorte, o los primeros años en la UCSE— diseñar ejercicios, armar exámenes de varios temas equivalentes y dar devoluciones a tiempo desborda al equipo docente. Cuando se intenta resolver con chatbots y prompts sueltos, aparecen alucinaciones, respuestas irreproducibles y criterios dispares."*
2. **Qué hacemos: Arquitectura y SDD en 5 cátedras (0:35 – 1:45 · Diapositivas 3, 4, 5 y 6):**
   - *"Nuestra propuesta no es usar un chatbot libre, sino gobernar agentes de IA mediante una arquitectura de tres capas: primero, reglas pedagógicas en texto plano versionadas en Git (`AGENTS.md`, `MEMORY.md` y rúbricas); segundo, el protocolo abierto MCP en modo solo lectura para que el agente inspeccione el repositorio real de la cátedra; y tercero, supervisión humana activa: la IA propone borradores y el docente siempre decide."*
   - *"Pasamos de prompts sueltos a Desarrollo Guiado por Especificación (SDD): el agente primero presenta un contrato `SDD.md`, el docente lo aprueba, y recién ahí genera el paquete completo: exámenes de 3 temas equilibrados, resoluciones, rúbrica, tests y simuladores. Hoy opera en cinco materias: Algoritmos y Programación, Programación II y Modelos y Simulación en UCSE, y Sistemas Operativos II y Teoría de Sistemas Operativos en UNJu."*
3. **Qué mostramos: Prediagnóstico y Resultados Preliminares (1:45 – 2:35 · Diapositivas 7 y 8):**
   - *"Cuando audita código, el agente tiene prohibido regalar la solución: cita la línea exacta del error y formula una pregunta socrática para que el alumno se autorregule. En este primer semestre de Programación II, a lo largo de 23 micro-entregas, el 91,7 % de los estudiantes —22 de 24— sostuvo un ritmo de entrega positivo con una media de 80 puntos, dos tercios quedó en rango de promoción y redujimos casi a cero las entregas que no compilan. Además creamos 35 simuladores web sin dependencias y capacitamos a 70 docentes de UCSE y UNJu en un taller de 10 horas."*
4. **Qué sigue (2:35 – 3:00 · Diapositiva 9):**
   - *"Nuestros próximos pasos son consolidar el análisis estadístico entre los Puntos de Ritmo y las notas finales, publicar los avances en la revista DIFUSIONES y WICC/CACIC, y medir en 2027 la concordancia entre agente y docente. La meta es clara: que el estudiante tenga feedback inmediato para aprender y el docente recupere tiempo para lo que la IA no puede hacer. Muchas gracias."*

