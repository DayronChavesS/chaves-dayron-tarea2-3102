---
sidebar_position: 5
---

# Ventajas de JamStack

Biilmann y Hawksworth (2019), Zammetti (2020), así como Pecoraro y Gambino (2021), enumeran las siguientes ventajas:


- **Velocidad**: Recordemos que con JamStack solo estamos sirviendo un sitio web estático, y esto generalmente ocurre mediante CDNs como Netlify. Todo ello reduce enormemente el numero de solicitudes (en contraste con paginas web que dependen de servidores).
      
- **Escalabilidad**: JamStack favorece el uso de APIs reutilizables y nos invita a centrar funcionalidad del sitio web en ellas tanto como sea posible.
      
- **Seguridad**: Ya que las paginas JamStack no tienen un backend, se reduce la superficie de ataque disponible para los cibercriminales. También se  eliminan otros exploits muy comunes como el cross-site scripting.   

- **Estabilidad**: Dado que una pagina web es precompilada antes de ser enviada al cliente, se puede detectar los errores de programación con antelación.
      
- **SEO**: Se sabe que los web crawlers de motores de búsqueda como Google, tienen muchos problemas para indexar el contenido de sitios web dinámicos, y esto tiene un impacto importante en el SEO de nuestro sitio web (su posicionamiento en los resultados de búsqueda). Pero JamStack regresa al uso de sitios web estáticos, con ello se elimina esta problemática.
      
- **Desarrollo**: Es evidente que los proyectos web JamStack son más pequeños y menos complejos que los que podríamos encontrar en otras arquitecturas; aquí los beneficiados somos nosotros, los desarrolladores web. Procesos como la depuración de errores también se simplifican enormemente, ya que estamos tratando con paginas estáticas y no dinámicas.