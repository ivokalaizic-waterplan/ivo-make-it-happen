# Solidificamos decimales CCEP
**Date:** 2026-01-13T14:30:00Z
**URL:** https://fathom.video/calls/530055673
**Participants:** Micaela Balza (micaela.balza@waterplan.com), Tomas Groshaus (tomas.groshaus@waterplan.com), María Berrocal (maria.berrocal@waterplan.com), Emanuel Casco (emanuel.casco@waterplan.com), Sofía Agudelo (sofia.agudelo@waterplan.com), Ivo Kalaizic (ivo.kalaizic@waterplan.com)

---

**María Berrocal Olmos** [00:00:00]: En el valor total, el número entero, ese es punto uno.

**María Berrocal Olmos** [00:00:05]: Y el punto número dos es, con una de las proposals visuales que tengo para diferenciar los decimales, no importa si tiene tres o cuatro porque se van a diferenciar visualmente, ya sea en el input o en una tabla.

**María Berrocal Olmos** [00:00:25]: Entonces, una de las cosas que podríamos definir es, también, dónde, o sea, si esas preferencias decimales es por user, o es por company, y acá me suena una pregunta, y de pronto me la pueden responder.

**María Berrocal Olmos** [00:00:40]: Cuando uno está compartiendo un Google Sheets, yo, por ejemplo, odio ver decimales en las tablas de Excel, y siempre se las quito.

**María Berrocal Olmos** [00:00:49]: Pero si estoy compartiendo ese archivo, y yo le quito los decimales, y lo está viendo vivo, y vos, deja de ver los decimales también.

**María Berrocal Olmos** [00:00:57]: Sí.

**María Berrocal Olmos** [00:00:59]: O sea, como, bueno.

**María Berrocal Olmos** [00:00:59]: Ok.

**Tomás Groshaus** [00:01:00]: Por company sería.

**Tomás Groshaus** [00:01:02]: Claro, sería la company.

**María Berrocal Olmos** [00:01:05]: No sé, o sea, no sé a qué nivel de granularidad se setean esas preferences, si es a nivel company o a nivel usuario.

**María Berrocal Olmos** [00:01:14]: Por temas de agilidad, yo plantearía una preferencia por company.

**María Berrocal Olmos** [00:01:20]: Ok.

**María Berrocal Olmos** [00:01:23]: Que por usuario.

**María Berrocal Olmos** [00:01:24]: Pero bueno, that's just me.

**María Berrocal Olmos** [00:01:26]: Me callo, ya, Sofía.

**Sofía Agudelo** [00:01:29]: Yo justo, o sea, como que yo no sé a qué nivel de solución queremos ir ahorita, pero digamos a nivel más deseable, yo iría a un nivel de usuario, porque además nosotros tenemos companies que abarcan el mundo en extensión, y entonces ahí entiendo que cambia a lo que cada persona está acostumbrada, como ver, separador de decimal.

**Sofía Agudelo** [00:01:55]: Y también en ese línea de que a nivel de robusto.

**Sofía Agudelo** [00:02:00]: O ligera, queremos una solución ahorita.

**Sofía Agudelo** [00:02:03]: Está como una configuración, o pienso yo como en una configuración que quizás ahorita hagamos y la absorba target tracking, pero que quede disponible para que en otras partes de Waterplan un usuario pueda decir como, definí esto, ok, y ahora el resto de secciones en la plataforma lo vaya como adoptando.

**Sofía Agudelo** [00:02:25]: Va, eso va en función de cuánto queremos de scope hoy en día para este topic de finales, pero como en evolución de Waterplan como producto, pues me parecería muy bacano como, o al menos yo como usuario, en algún lugar, si voy a una configuración, quizás yo no quiero verla en solo un lugar, y luego me muevo a otro lugar y es esa configuración no se utilice.

**Sofía Agudelo** [00:02:50]: Ya, Emma.

**Sofía Agudelo** [00:02:54]: A mí, yo entiendo de dónde viene esa...

**Emanuel Casco** [00:03:00]: La idea de hacerlo como algo configurable, el gran problema que tengo con eso es que va a pasar lo que pasa con todo lo que empezamos a hacer así, queda implementado en un solo módulo y después nos levantan el bug de che, entro a target tracking y me muestra los dos decimales que yo pedí, pero entro después a risk framework y no está.

**Emanuel Casco** [00:03:23]: Y después el otro problema va a ser no es solamente por usuarios, también por tipo de métrica.

**Emanuel Casco** [00:03:27]: Para mí es una definición más nuestra y ser súper claros con eso y me parece que de las propuestas que mencionamos hasta ahora, la de MERI, la de marcar bien dónde empiezan los decimales, es como la mejor y más accionable ahora.

**Emanuel Casco** [00:03:44]: Y después bajaría una definición de cuánto queremos mostrar por defecto.

**Emanuel Casco** [00:03:49]: Ya hoy se puede guardar un valor con más decimales de los que se muestran.

**Emanuel Casco** [00:03:55]: El problema es otro, el problema es cuando está en el input, cuando está imputeando el valor.

**Emanuel Casco** [00:04:00]: ¿Qué le quiero mostrar?

**Emanuel Casco** [00:04:02]: Y ahí, si yo se lo estoy cortando y...

**Emanuel Casco** [00:04:06]: ¿En el input ok?

**Tomás Groshaus** [00:04:08]: Perdona, Tomi, ¿qué decías?

**Tomás Groshaus** [00:04:10]: No, que en el input estoy ok, sin tener más.

**Tomás Groshaus** [00:04:15]: Ahí es donde también está el problema.

**Emanuel Casco** [00:04:17]: Entonces, si definimos, mira, el input es todo el número, a lo sumo podemos trinearlo a partir de una cantidad, pero después cuando lo muestro, quiero mostrar siempre tres, creo que estamos bien.

**Emanuel Casco** [00:04:33]: Yo no sé si me pondría a hacer algo como configurable ahora, la verdad, pero como quieran, depende del tiempo que le quieran dedicar.

**Tomás Groshaus** [00:04:41]: Ahí, antes de darte la palabra, Mery, vos, Mica, tenés algún comentario aparte de lo de la internalización, que tenés ahí la voz del front.

**Micaela Balza** [00:04:51]: Creo que a mí lo que más me...

**Micaela Balza** [00:04:53]: O sea, hacer podemos hacer, siempre yo les voy a decir que sí a lo que ustedes quieran.

**Micaela Balza** [00:04:57]: El tema es, ahora mismo está...

**Micaela Balza** [00:05:00]: Como muy, no sé, pone el en target tracking, creo que ahora todo está internacionalizado, se dice, pero después está como inconsistente en toda la plataforma, y eso me preocupa, lo que decía, además, que van los en target tracking, por ahí lo dejamos pipí cucú, pero después van a otra sección y, nada, empiezan, o sea, es confuso, ¿no?

**Micaela Balza** [00:05:24]: Lo ponen en español y van a ver la coma, el punto al revés en algunos lados y otros no, entonces, nada, y cuando lo implementé a eso, no, no, no, no, no sé si no tuvimos esta conversación, no tuve cuidado y quedó muy inconsistente, pipí cucú, sí, con C.

**Micaela Balza** [00:05:41]: ¿Con C?

**Tomás Groshaus** [00:05:43]: Sí, sí, con C.

**Tomás Groshaus** [00:05:46]: Mary, ¿querés decir algo más así de los issues o pasamos a los next steps?

**María Berrocal Olmos** [00:05:50]: No, bueno, no sé si es un issue, quería simplemente mostrarle un segundo para entender lo que, para ver si entendí lo que dice Emma.

**María Berrocal Olmos** [00:05:59]: Gracias.

**María Berrocal Olmos** [00:06:00]: De los inputs.

**María Berrocal Olmos** [00:06:04]: Voy.

**María Berrocal Olmos** [00:06:05]: No me piden hacer cambios porque esta es la compañía de Coagola, pero yo, por ejemplo, veo que el baseline, 1.761932, es un valor que traemos de Data Gathering, ¿correcto?

**María Berrocal Olmos** [00:06:16]: Sí.

**María Berrocal Olmos** [00:06:19]: Y como tal, ellos pueden modificar ese número.

**María Berrocal Olmos** [00:06:22]: si quieren poner 1.2, pueden entrar y poner 1.2.

**María Berrocal Olmos** [00:06:26]: El target value también es un input, pero me está mostrando solo 3.

**María Berrocal Olmos** [00:06:31]: Y el impact, que es un porcentaje, me está mostrando, no sé cuántos de acá, 8.

**Ivo Kalaizic** [00:06:38]: Y después en el summary, 2.

**María Berrocal Olmos** [00:06:41]: Sí.

**María Berrocal Olmos** [00:06:42]: Sí, la definición es que en los inputs no vamos a permitir mostrar, perdón, vamos a permitir que pongan el reguero de todos los números.

**Micaela Balza** [00:06:54]: Sí.

**María Berrocal Olmos** [00:06:55]: O sea, me parece inconsistente mostrar, tipo, 3 acá, 8 acá,

**María Berrocal Olmos** [00:07:00]: Dos acá, como que le daría una pensada, porque todos estos son inputs al final del día.

**Emanuel Casco** [00:07:06]: Ahí los separarían dos, el de impact, estoy de acuerdo, si querés podemos hacer que cuando se autocalcula el impact, solamente cuando se autocalcula, no cuando es un input del usuario, tremear el impact para que quede igual al valor que estás viendo ahí abajo.

**Emanuel Casco** [00:07:23]: Entonces, por detrás, ese no es el valor del impact, porque el valor del impact, para que te dé el número que tenés ahí, tiene que ser el que está ahí, pero bueno, lo tremeamos para que sea 14.13.

**Emanuel Casco** [00:07:36]: En el baseline value y en el target value, para mí son casos distintos, porque el baseline value, ese es el valor que hay, si vos lo modificás, ya deja de ser el mismo valor que hay.

**Emanuel Casco** [00:07:47]: Entonces, pero podemos modificarlo, si quieres.

**María Berrocal Olmos** [00:07:49]: Claro, o sea, para mí es más una definición, si el valor es un resultado de una operación, tremear los decimales, si es un valor inputeado.

**María Berrocal Olmos** [00:08:00]: Pusiste 10 decimales, o sea, se ven los 10 decimales.

**María Berrocal Olmos** [00:08:03]: Capaz, o capaz una opción donde yo puedo ocultar, como en Excel, donde yo puedo mostrar, ocultar decimales, o sea, no tengo ni idea, así que, I don't know, solamente lo quería traer.

**Emanuel Casco** [00:08:15]: si querés, el delimpo, llevémonoslo, lo hacemos, de que cuando se autocalcula, que el valor no sea el valor real, sino que sea un valor ahí medio...

**Emanuel Casco** [00:08:25]: ¿Como este?

**María Berrocal Olmos** [00:08:25]: Sí.

**María Berrocal Olmos** [00:08:26]: Tipo, muéstrame 14.13 acá.

**María Berrocal Olmos** [00:08:31]: Tipo, no sé.

**María Berrocal Olmos** [00:08:33]: ¿Quiénes ven?

**Tomás Groshaus** [00:08:34]: Pero, ¿cuál es la definición?

**Micaela Balza** [00:08:38]: ¿Es cuando es algo que se autocalcula?

**Micaela Balza** [00:08:40]: ¿O es porque es porcentaje?

**Micaela Balza** [00:08:42]: ¿O es porque tenemos el input y abajo un portátil?

**Micaela Balza** [00:08:47]: Ojo.

**María Berrocal Olmos** [00:08:48]: Eso hay que definirlo, por eso digo, porque déjenme bajo los use cases, porque son varios, teniendo en cuenta, o sea, solamente hablando de inputs, hay un montón de use cases.

**Micaela Balza** [00:08:58]: Gracias.

**Micaela Balza** [00:08:59]: Gracias.

**Micaela Balza** [00:08:59]: Gracias.

**Micaela Balza** [00:09:00]: Volvamos, si querés, Ivo.

**Tomás Groshaus** [00:09:02]: Perdón, Ivo, te robé todo.

**Tomás Groshaus** [00:09:04]: No, no, está perfecto.

**Ivo Kalaizic** [00:09:10]: Bien.

**Ivo Kalaizic** [00:09:13]: Si quieren, como, empecemos a ping-pongar ahora, tipo, las solutions son los posibles next steps, porque de vez no tengamos la solution hoy.

**Micaela Balza** [00:09:23]: Para mí, lo que me interesa saber, para empezar a pensarlo es, vamos a querer que lo puedan editar por company, por usuario, porque si vamos a querer que suceda eso, ya requiere bug, me estoy imaginando un context que envuelva toda la aplicación, donde así de todas las features van a tener dos o tres, o lo que se té la company.

**Micaela Balza** [00:09:50]: No sé, no incluso si por métrica.

**Micaela Balza** [00:09:52]: Si no queremos eso, y es parecido por ahí a lo que tenemos ahora en Target.

**Sofía Agudelo** [00:10:00]: Drag-in, que voy a hablar para Ima, ¿no?

**Micaela Balza** [00:10:02]: Pero que hay un custom hook, o podría ser un componentito que grapé todos los números de donde queramos que esté esa configuración.

**Micaela Balza** [00:10:14]: Ok.

**Tomás Groshaus** [00:10:19]: Ok, Isi.

**Ivo Kalaizic** [00:10:20]: Vale, le doy, dale, dale, dale, no, es yo quiero decir que para mí lo bueno de que sea configurado es que estaríamos atacando el tema de que si CCP hace algo, colgate hace otra cosa, o mismo en Carbon, lo que estoy pensando, que pues sí, cambia eso también, que lo puedan configurar la company a nivel métrica, era mi pensamiento.

**Emanuel Casco** [00:10:50]: Para mí, relación costo-beneficio, no, o sea, sinceramente creo que no rinde.

**Emanuel Casco** [00:10:56]: De vuelta, eh, si sienten que es algo que valga la pena.

**Emanuel Casco** [00:11:00]: ¿Vale dedicarle varios días?

**Emanuel Casco** [00:11:02]: Le metemos, no tengo problema.

**Emanuel Casco** [00:11:04]: Pero es como dice Mica, esto requiere back, guardarse la configuración por el máximo nivel de granularidad, porque no va a servir para company, porque así como vino el pedido de necesito verlo por cuatro decimales, va a venir alguien a decirme, che, cuatro decimales me encanta cuando es un ratio.

**Emanuel Casco** [00:11:20]: Ahora, si es un valor absoluto de medición, no me sirve porque son millones.

**Emanuel Casco** [00:11:25]: Ok, entonces ahí vamos a tener que hacer otra cosa.

**Emanuel Casco** [00:11:33]: Nada, siento que nos vamos a estar tirando un tiro en el pie porque después va a pasar de, sí, en target tracking tiene sentido, pero en reframing no, y va a quedar todo como mucho más inconsistente.

**Emanuel Casco** [00:11:43]: Yo capaz bajaría una definición de son tantos.

**Micaela Balza** [00:11:50]: Sí.

**Tomás Groshaus** [00:11:53]: ¿Y si es por métrica?

**Micaela Balza** [00:11:56]: Estoy pensando algo que no sé si también es tirarnos un tiro en el pie.

**Micaela Balza** [00:11:59]: métrica?

**Micaela Balza** [00:12:00]: Que es, en medio de lo que está diciendo Meri, como que sea directamente en target tracking, como una configuración de target tracking, como quiero ver dos, quiero ver tres.

**Micaela Balza** [00:12:09]: Como water stewardship, decís.

**Tomás Groshaus** [00:12:11]: Pero no tiene unidades, pero no tiene unidades.

**Tomás Groshaus** [00:12:14]: Claro, y creo que es un context, ¿no?

**Micaela Balza** [00:12:17]: De water stewardship.

**Micaela Balza** [00:12:20]: Entonces que sea como en el momento, ¿entendés?

**Micaela Balza** [00:12:22]: No es que va a quedar guardado en ningún lado, como, ah, esta la quiero ver con dos, esta la quiero ver con tres.

**Emanuel Casco** [00:12:29]: En el escenario de análisis builder, no sé si alguna vez lo vieron, que tenía un drop-down de configuración.

**Emanuel Casco** [00:12:35]: O ahorita.

**Emanuel Casco** [00:12:36]: Estoy haciendo la referencia a la mejor herramienta del mundo, ¿no?

**Emanuel Casco** [00:12:41]: Pero, en tantas maneras ideas había una buena idea, que era la de, tenías modo de ver los valores, y tenías modo compacto, modo completo y modo crudo, creo que la hemos puesto.

**Emanuel Casco** [00:12:53]: Esto en modo crudo era, no te tocó en nada, el valor tal cual se está calculando, te lo estoy mostrando así como para que lo copies en una...

**Emanuel Casco** [00:13:00]: Excel.

**Emanuel Casco** [00:13:03]: Bueno, row, no sé cómo traducirlo al español de otra forma.

**Emanuel Casco** [00:13:08]: Creo que sí, se cruda, ¿eh?

**Emanuel Casco** [00:13:10]: Se cruda.

**Emanuel Casco** [00:13:11]: ¿Cruda?

**Emanuel Casco** [00:13:12]: Me hacen bullying.

**Emanuel Casco** [00:13:15]: Después estaba modo, creo que estándar, que era como un, es así, no jodas, y el modo como compacto que era como, bueno, ok, si es un valor de un millón te muestro 1M.

**Emanuel Casco** [00:13:26]: No te interesa tanto, es como más decorativo.

**María Berrocal Olmos** [00:13:31]: Pero eso es una cosa de solamente aplica para el, la feature.

**Sofía Agudelo** [00:13:40]: Sí, solamente en el SAP, solamente en ese escenario en el que estás.

**Emanuel Casco** [00:13:44]: De hecho, podías tener un escenario en un modo, un escenario en otro.

**Emanuel Casco** [00:13:47]: Capaz, podemos hacer lo mismo para la vista, y vos podés verlo en determinado, nada, lo ves en ese formato, en el tiempo que estás ahí, se te guarda la próxima vez que volvés a entrar.

**Emanuel Casco** [00:14:00]: Te sigue apareciendo así y vos lo podés editar.

**Emanuel Casco** [00:14:02]: Lo único malo que tenía eso era que a veces quedaba muy fea la vista cuando por ejemplo tenías el valor crudo, imagínense que a veces teníamos valores de miles de millones, si a algún loco se le ocurría subir el agua en litros y quería verlo y era mucho volumen, tenías miles de millones de litros y no había UX a aguantar.

**Emanuel Casco** [00:14:28]: Pero lo tiro como una posibilidad como, ok, tal vez podemos tener ese drop down, pero vamos a tener que hacer lo que dice Mica, tipo tener un contexto, tener capaz dos o tres componentes que sean de input y de visualización del numerito que se encarguen de formatear todo antes de presentarlo.

**Emanuel Casco** [00:14:48]: De vuelta, no es súper difícil, es súper paja, porque es laburo de hormiga de ir yendo lugar por lugar, aplicando esto, asegurarse que quede consistente y después...

**Emanuel Casco** [00:15:05]: Evo, quiero volver para atrás un poquitico.

**Sofía Agudelo** [00:15:08]: Dale.

**Sofía Agudelo** [00:15:10]: El pain de métrica, ¿me lo puedes volver a decir, por favor?

**Sofía Agudelo** [00:15:16]: Tengo mis dudas sobre, antes de seguir discutiendo en solución.

**Sofía Agudelo** [00:15:20]: Las métricas en sí tienen un tinto nivel de gran probabilidad, y eso es lo que deberíamos estar taclando.

**Ivo Kalaizic** [00:15:25]: Y un ejemplo puede ser, water use ratio tiene tres decimales, mientras que withdrawals, o consumption, o production, tendría cero.

**Ivo Kalaizic** [00:15:36]: Y esto impacta, una cosa que también yo he estudiado, es que esto impacta en, tanto el número per se del target, por ejemplo, Pero, por otro lado, cuando estamos mirando, gap to target, por ejemplo, que es una de las, de los insights, por ejemplo.

**Ivo Kalaizic** [00:15:59]: Gracias.

**Ivo Kalaizic** [00:16:00]: Es decir, ¿qué da target tracking respecto a una métrica?

**Ivo Kalaizic** [00:16:03]: También se habría impactado en función de la métrica.

**Ivo Kalaizic** [00:16:05]: ¿Se entiende?

**Ivo Kalaizic** [00:16:06]: Por ejemplo, si yo tengo un gap to target de production, puede ser un gap to target de un millón sin decimales.

**Ivo Kalaizic** [00:16:13]: Ahora, si tengo un gap to target de water risk ratio, ahí sí me van a interesar los decimales.

**Tomás Groshaus** [00:16:21]: Sí, por métrica.

**Tomás Groshaus** [00:16:23]: Por métrica, exactamente.

**Sofía Agudelo** [00:16:32]: Pensá, decí lo que estás pensando.

**Sofía Agudelo** [00:16:34]: Ok.

**Sofía Agudelo** [00:16:37]: ¿Es un pedido?

**Sofía Agudelo** [00:16:38]: Dale.

**Sofía Agudelo** [00:16:42]: Tenía a Mary primero la mano.

**María Berrocal Olmos** [00:16:47]: Se me olvidó.

**Emanuel Casco** [00:16:51]: Lo que iba a decir es, capaz no es por métrica, en algún momento teníamos en una de las funciones que usamos para formatear los números,

**Emanuel Casco** [00:17:00]: Quequeaba qué tan largo era el número, y si el número, por ejemplo, el número era mayor a un millón, ok, ni muestra los decimales, no le importa a nadie, el número es entre, es menor a 100, entonces ahí mostra los decimales, el número es menor a 100, perdón, el número es menor a 1 y tiene, entonces mostra tantos decimales, como que era en base a la magnitud del número, era con qué granularidad te lo mostraba, entonces ahí atacás todos los problemas, porque es como que cuando es un número menor a 1, te lo muestro con 3 decimales, cuando es un número mayor a 1000, te lo muestro entero, y te muestro algunos decimales, y cuando el número es mayor a un millón, te dejo de mostrar decimales, porque ya son tipo, me, pero te empiezo a mostrar el valor entero, y creo que cuando era mayor a mil millones, te lo empezaba a mostrar agrupado, te lo empezaba a mostrar como 1K.

**Emanuel Casco** [00:18:00]: Millones, y eso me deja de importar qué métrica particularmente estés mirando.

**Ivo Kalaizic** [00:18:08]: Es el valor, ¿es el orden de magnitudes?

**Emanuel Casco** [00:18:12]: Sí, del número.

**Sofía Agudelo** [00:18:14]: Esto puede estar bueno.

**María Berrocal Olmos** [00:18:17]: O sea, está bien, pero igual no responde el pain de Coca-Cola.

**María Berrocal Olmos** [00:18:22]: Quiero ver por tres decimales, punto.

**Tomás Groshaus** [00:18:25]: No, bueno, pero ponemos como regla, es tipo, como te digas, si el valor está entre cero y diez, por así decirlo, es tres decimales, voy a pero tú es, ¿eh?

**Tomás Groshaus** [00:18:37]: Quizás entre cero y 999, no sé, no sé qué cosa.

**Tomás Groshaus** [00:18:42]: Tres decimales, si está arriba de miles es dos, si es millones es uno, mi idea, o cero.

**Tomás Groshaus** [00:18:49]: Y lo definimos así para todos.

**Tomás Groshaus** [00:18:51]: O sea, me hace sentido que hayan tres decimales cuando el número es dos coma algo, porque multiplicado eso por...

**Tomás Groshaus** [00:19:00]: Millones de litros puede cambiar un montón, pero no me hace sentido que tenga como hoy tres decimales, los valores de producción que están en litros, y literalmente son hoy 434.563.443,246.

**Tomás Groshaus** [00:19:23]: O sea, I get it.

**María Berrocal Olmos** [00:19:29]: ¿I get it?

**María Berrocal Olmos** [00:19:30]: Pero mi pregunta es, ahí les mandé por el blue el screenshot de lo que está en el escenario análisis, que by the way, está mal escrita de palabra estándar, pero no me parece mal que sea una decisión que toma la company.

**María Berrocal Olmos** [00:19:54]: Es que es británico, lo hace tiempo.

**Emanuel Casco** [00:19:55]: Tipo, porque lo que acabas de decir, Tommy Gross, es tal cual, tipo,

**María Berrocal Olmos** [00:20:00]: Esta definición, tipo, te muestro las CAS, o te muestro el RO, o te muestro el estándar, ¿no?

**Tomás Groshaus** [00:20:10]: Salvo que lo queramos hacer, tipo...

**Tomás Groshaus** [00:20:13]: Yo entendí que, claro, sin eso, entonces, sea, directamente la regla es esta para todos, y es por orden de magnitud.

**Tomás Groshaus** [00:20:24]: Pero ahí, por ejemplo, me conflictuas con el tema de los inputs.

**María Berrocal Olmos** [00:20:28]: ¿Qué pasa si yo quiero poner un millón de CAPEX?

**Sofía Agudelo** [00:20:33]: ¿Me vas a poner 1K?

**Sofía Agudelo** [00:20:36]: O sea, si vos pones un millón de CAPEX, te lo muestro como un millón.

**Sofía Agudelo** [00:20:43]: O si me pones un millón, coma 4, 5, 3, 4, esa es tu pregunta, Mary.

**María Berrocal Olmos** [00:20:50]: O sea, si yo en el input pongo un millón, lo que me acabas de decir es que la fórmula o la lógica que estamos planteando me lo va a reformatear a 1K.

**Tomás Groshaus** [00:21:00]: No, no, sin decimales.

**Tomás Groshaus** [00:21:02]: Eso es lo que acaba de escribir Emma en el chat.

**Tomás Groshaus** [00:21:06]: Podemos elegir, podemos definir, Mary, la lógica, la verdad.

**Emanuel Casco** [00:21:10]: Claro, o sea, en input para mí es, si quieren veamos, no veamos loco, no lo vemos nunca.

**Emanuel Casco** [00:21:18]: Vamos por parte.

**Emanuel Casco** [00:21:19]: A nivel presentación, para mí la lógica que cubre todos los casos es esta, y no hace falta meterse con ningún tipo de configuración, o a lo zoom, o después podríamos ver de, mirá, Coca quiere tres decimales, pero Colgate dice, che, tres decimales se confunde con la coma de los, de las decenas, de las centenas, entonces poneme cuatro.

**Emanuel Casco** [00:21:38]: Nada, se puede discutir.

**Emanuel Casco** [00:21:41]: Ahora, a nivel input, lo separaría en dos.

**Emanuel Casco** [00:21:45]: Lo que el usuario pone, si el usuario pone 15 decimales, le tengo que dejar poner 15 decimales.

**Emanuel Casco** [00:21:51]: Entonces, en presentación, para mí seguiría mostrando esta lógica, por más de que el usuario haya puesto los 15 decimales.

**Emanuel Casco** [00:22:00]: Y a lo sumo lo que se podría hacer es cuando yo autocalculo valores para esos fields, redondearlos, no soy muy fan de eso en realidad, pero podríamos.

**María Berrocal Olmos** [00:22:19]: Es que a mí lo que me preocupa son componentes como el de edit target que tenemos inputs que puedes editar manual, inputs que son autocalculados y vamos a volver a tener el mismo issue donde te muestro 45 decimales y el target tiene 3 y el porcentaje tiene 2 o 3, digamos.

**María Berrocal Olmos** [00:22:40]: Pero, ¿me entienden?

**María Berrocal Olmos** [00:22:41]: Como que siento que igual queda inconsistente por más que le metamos a esta lógica.

**Micaela Balza** [00:22:48]: Y yo ponele, si ahí metemos lo del crudo, entonces tenemos toda esta lógica, pero si alguien quiere ir y poner el crudo, ver todo.

**Tomás Groshaus** [00:23:01]: Estamos un poquito pasados y tenemos que ir a la refi, también a refi podríamos ir charlando un poquito de esto, pero no sé si hay alguien más en la refi que no está acá.

**Tomás Groshaus** [00:23:12]: De momento no.

**Tomás Groshaus** [00:23:15]: Ok.

**Tomás Groshaus** [00:23:18]: ¿Cómo, qué next steps nos llevamos de esto así, medio como cerramos?

**Tomás Groshaus** [00:23:22]: Quizás en next steps tenemos que ir charlando ahora en la refi, pero...

**Micaela Balza** [00:23:25]: Para mí es bajar, o sea, que todos estemos cómodos, bajar estas definiciones y bueno, y después veremos cómo lo...

**Tomás Groshaus** [00:23:34]: Ok, eso por un lado, y por otro lado también podemos incorporar, Meli, tu parte del diseño, viste, de la distinción entre los valores de coma.

**Tomás Groshaus** [00:23:43]: Sí.

**Ivo Kalaizic** [00:23:45]: Para mí ese es el primer win que lo vamos a implementar y ver qué pasa, no sé qué opinan ustedes.

**Tomás Groshaus** [00:23:52]: Dios, es como que entra a la cámara y es como que se deja escuchar el que está hablando.

**Tomás Groshaus** [00:23:58]: Gracias.

**María Berrocal Olmos** [00:24:00]: Y, bueno, sé qué dijiste, perdón.

**Ivo Kalaizic** [00:24:07]: No sé qué, lo que me gustaría entender es implementar los cambios de design, me di que vos trajiste, que si quieren que haga referencia, les armo, busco rápido el ticket.

**Ivo Kalaizic** [00:24:21]: Si creen que podríamos empezar con eso, como para al menos empezar a diferenciar, lo único que me queda pendiente como de terminar de definir es, voy a para hablar sobre lo que les muestro.

**Ivo Kalaizic** [00:24:43]: Lo que uso, vamos a hacer un segundo.

**Ivo Kalaizic** [00:24:48]: Mery trajo como ideas para diferenciar decimales, no sé si todos lo pudieron, habían visto, tipo, cómo, no sé, hacer más transparentes los últimos decimales y de esta manera evitaríamos confundir.

**Ivo Kalaizic** [00:25:00]: 1.595 con 1.595.

**Tomás Groshaus** [00:25:04]: No solo más transparentes, sino más chiquitos también.

**María Berrocal Olmos** [00:25:07]: Sí.

**Ivo Kalaizic** [00:25:08]: Lo único que sí deberíamos definir bien con esto es, una cosa es un número en el card, por ejemplo, o un número cuando miramos, cuando holdeamos acá.

**Ivo Kalaizic** [00:25:20]: Otro es, si venimos a Target Dashboard, Target History, acá tenemos, no sé si en este número valdría la pena hacer ese cambio, por ejemplo.

**Sofía Agudelo** [00:25:36]: Va en todo.

**María Berrocal Olmos** [00:25:38]: Ok.

**María Berrocal Olmos** [00:25:39]: Para mí, todo lo que es decimal va a 12 píxeles y transparente, 50%.

**María Berrocal Olmos** [00:25:48]: Porque es la única manera visualmente de que se entienda siempre que nuestros decimales son más chiquitos.

**María Berrocal Olmos** [00:25:53]: Es como hacen algunas apps financieras, algunos pueden ustedes, si quieren, pueden entrar y ver que hay unas apps que más...

**María Berrocal Olmos** [00:26:00]: Manejan los decimales siempre chiquitos por más de que no se muestre 2, 1, 3, 4, 5.

**Emanuel Casco** [00:26:05]: Estaría bueno tener una definición de cómo se ve cuando el texto es medium, cómo se ve cuando el texto es large, porque en algunos lados tenemos números que mostramos como títulos, bueno, no como títulos, pero como más grande.

**Emanuel Casco** [00:26:22]: Sí, por cierto.

**María Berrocal Olmos** [00:26:23]: Y en un input, ¿cómo se vería eso?

**Emanuel Casco** [00:26:26]: O en el input es igual.

**Emanuel Casco** [00:26:28]: Para mí se vería igual, tipo chiquita, sí, qué bueno.

**María Berrocal Olmos** [00:26:34]: Yo aquí quiero poner la regla todo.

**María Berrocal Olmos** [00:26:37]: Estaba transpirando yo.

**María Berrocal Olmos** [00:26:39]: No, los inputs son diferentes.

**Tomás Groshaus** [00:26:43]: Los inputs para mí los decimales son más grandes.

**María Berrocal Olmos** [00:26:46]: If input bold and bigger.

**María Berrocal Olmos** [00:26:50]: Italic and...

**Emanuel Casco** [00:26:53]: En los inputs los decimales bailan, o sea, bajan y suben a medida que vas escribirlo.

**Emanuel Casco** [00:26:58]: Oh, qué da hell.

**Tomás Groshaus** [00:27:00]: Yo recuerdo el Ranscape, hijo del Ranscape.

**Ivo Kalaizic** [00:27:05]: Implementar esto con todo target tracking, ¿qué tanto laburo llevaría o representaría?

**Ivo Kalaizic** [00:27:16]: ¿Qué es esto?

**Sofía Agudelo** [00:27:17]: ¿Lo de Mary?

**Sofía Agudelo** [00:27:21]: ¿Y qué más?

**Ivo Kalaizic** [00:27:22]: No, no, no, implementar el cambio de diseño en decimales para que los decimales sean más transparentes y chicos.

**Ivo Kalaizic** [00:27:27]: Y sería en toda la plataforma, ¿no, Mary?

**Tomás Groshaus** [00:27:30]: No solo en target tracking.

**Tomás Groshaus** [00:27:34]: Everywhere.

**María Berrocal Olmos** [00:27:35]: Ya le comuniqué a los designers, tipo, notificados, se ha tomado la definición, si ustedes tienen cosas con decimales, va esto.

**Emanuel Casco** [00:27:45]: O sea, una realidad, o sea, lo que podemos hacer nosotros es bajar la función que se encargue, o el componente, o el componente, que se encargue de formatear los valores y llevarnos a implementarlo en target tracking, pero no...

**Emanuel Casco** [00:28:00]: El llevar, hacerlo, o sea, es un, para mí va a pasar lo que pasa siempre, pero bueno, esperemos que esta vez no, llevarnos, tipo, bien por módulo que cada uno se encargue de actualizarlo.

**Emanuel Casco** [00:28:11]: Sí, eso nos lo pongo ya nosotros con Ivo con todas las PMs y que baje de ahí.

**Tomás Groshaus** [00:28:16]: Antes, cuando siempre que lo hacíamos, no había PMs.

**Tomás Groshaus** [00:28:20]: El tipo estábamos luchando entre el mundo.

**Tomás Groshaus** [00:28:25]: ¿Vos cómo lo ves, Mica, tipo, armar el componente?

**Tomás Groshaus** [00:28:29]: Si lo piensas, o sea, armar el componente no va a ser tan terrible.

**Micaela Balza** [00:28:32]: tema después, sea, el target tracking ya fue trabajo, dormía, ir, y se me escaparon un par, numerito por numerito, chequeando, que fuera de dos, de tres, había algunos que se mostraban con sí, con la M, con la K, de mil, todo, todo, Después había porcentaje cuando era menos de 0,01, creo que aparecía un texto, o sea, hay que ir viendo implementación por implementación y que...

**Micaela Balza** [00:28:54]: Hay dos cosas.

**Tomás Groshaus** [00:28:55]: Uno es, Ivo se armó una base de datos gigante, tipo, variable por variable.

**Tomás Groshaus** [00:29:00]: Punto número 2, para mí pueden hacerlo juntos, sigo cómica, si no se pueden sentar juntos a hacerlo, así.

**Micaela Balza** [00:29:07]: De paso, ya que estamos viendo esto, me encantaría que definamos cantidad de, voy a decir una burrada, creo que no, latitud y longitud, también estamos mostrando lo que queremos en varios lados.

**Tomás Groshaus** [00:29:20]: La latitud y longitud creo que está bien mostrar todos, por un tema, sí, siempre todos por un tema de exactitud, ahí sí ves, tipo de precisión, y siempre se muestra con todos en todos los lugares del mundo, ¿verdad?

**Tomás Groshaus** [00:29:32]: Ok.

**Tomás Groshaus** [00:29:34]: No sé si es así en la plataforma, pero voy a suponer que sí.

**Tomás Groshaus** [00:29:38]: Yo también.

**Tomás Groshaus** [00:29:41]: Supongo que eso sí.

**Micaela Balza** [00:29:43]: Nunca me he visto cortado.

**Micaela Balza** [00:29:45]: No, para mí lo que va a ser largo es implementarlo en todos lados y después que lo pruebes.

**Micaela Balza** [00:29:51]: Bueno, empecemos en tag tracking.

**Tomás Groshaus** [00:29:53]: Si quieren, lo que está intentando preguntar, Ivo, es como, para poder después priorizarlo, viste, frente a todas las otras cosas.

**Tomás Groshaus** [00:30:01]: No, es tipo, nos la podemos llevar, se le pueden llevar, o sea, si querés vos podés llevártelo a Mica, a entender el tipo.

**Tomás Groshaus** [00:30:06]: Sí, sí, sí.

**Micaela Balza** [00:30:07]: La última vez creo que fueron dos días y medio, te digo, de revisar todo.

**Tomás Groshaus** [00:30:14]: Ok, ok.

**Tomás Groshaus** [00:30:17]: ¿Tengo?

**Emanuel Casco** [00:30:18]: No, iba a decir eso, lo único es, si queremos, o sea, esto no es un ticket que va a estar listo en dos horas y se merguea y ya está, o sea, van a ser dos días capaz solamente de desarrollo y después otros dos días capaz solamente de cubazo, solamente para target tracking, solo target tracking.

**Emanuel Casco** [00:30:33]: Entonces, hay que tener como super prioridad y que pase de que, bueno, lo arrancamos, lo dejamos on hold una semana porque estamos a full con otras cosas, como hay que arrancarlo y liquidarlo lo antes posible, porque son esos tickets que si no después, mientras Mica está fixando en un lugar, se lo estoy rompiendo en otro PR.

**Tomás Groshaus** [00:30:54]: Yo siento que, bueno...

**Tomás Groshaus** [00:30:57]: Eh...

**Tomás Groshaus** [00:30:58]: Eh...

**Tomás Groshaus** [00:30:59]: Gracias.

**Tomás Groshaus** [00:31:00]: ¿Quieren que la refinemos ahora?

**Tomás Groshaus** [00:31:01]: ¿Ya empezamos la refi?

**Tomás Groshaus** [00:31:05]: ¿Somos solo nosotras en la refi?

**Tomás Groshaus** [00:31:07]: Creo que sí, ¿no?

**Tomás Groshaus** [00:31:08]: Sí, sí, solo somos nosotros.

**Tomás Groshaus** [00:31:11]: ¿Quieren?

**Tomás Groshaus** [00:31:11]: Vamos a la refi, así, cerramos esto, tipo resumen, entonces, ahora lo hagamos en la refi para estimarlo, el first, entre comillas, quick win, es aplicar los cambios de Medi, pero estaría bueno ver cómo quedan, tipo, si se puede, ¿viste?, como hacer una prueba ahí, tipo, a la boca, como, eso sí entiendo que es rápido, de cómo quedarían los cards en la tool, pero estaría bueno.

**Tomás Groshaus** [00:31:41]: Y el segundo paso es lo de la lógica esta a nivel orden de magnitud, la pregunta que yo hago, y ahora hablamos en la refi, es, vale la pena hacer las dos juntos, porque ya hay que ir uno por uno, ¿viste?, por los decimales, tipo, aplicar las...

**Tomás Groshaus** [00:32:01]: ¿O son esfuerzos totalmente diferentes?

**Tomás Groshaus** [00:32:04]: Esa es como la pregunta que sí que vamos a hablar en la refi, ¿se entiende?

**Tomás Groshaus** [00:32:08]: O sea, como, che, si vamos a aplicar el cambio del componente de Meri, de achicar los decimales, y es como, hay que ir uno por uno, y toda la bola, y que no se nos pase ninguno, y testearla, y bla, bla, ¿conviene también hacerlo del cambio de orden de magnitud, porque vamos a tener que hacer lo mismo?

**Tomás Groshaus** [00:32:22]: ¿O eso como es más genérico, no hay que ir uno por uno?

**Micaela Balza** [00:32:26]: ¿Me correa Mica?

**Micaela Balza** [00:32:28]: Ah, bueno, que hable Mica mejor.

**Micaela Balza** [00:32:29]: Dale, dale.

**Emanuel Casco** [00:32:30]: Lo que iba a decir es, siento que no sé cómo lo vamos a resolver todavía, puede que sea un componente o una función, o ambas, en todo caso lo que va a terminar pasando es que todos los valores que mostremos deberían estar grafiados en ese componente o por esa función, entonces una vez que lo hagamos para uno ya debería estar, el problema es que después cuando quieras testear lo otro vas a tener que volver a hacer la pasada, sí o sí, porque si no es confiar en que no nos comimos nada en la última vez.

**Emanuel Casco** [00:32:59]: Entonces, ¡Gracias!

**Emanuel Casco** [00:33:00]: Para mí conviene hacerlo todo de una y ya vemos cómo queda final y lo empezamos a aplicar.

**Tomás Groshaus** [00:33:06]: Y hacer esto otro sería tipo otros dos días y medio, o sería una semana de trabajo para hacer todo.

**Emanuel Casco** [00:33:12]: Tal vez a nivel desarrollo no, tal vez a nivel desarrollo ya está hecho porque ya lo trajiste a un componente y es actualizar ese componente.

**Emanuel Casco** [00:33:22]: Pero a nivel QA seguro que no, porque ahí tenés que seguir todo.

**Tomás Groshaus** [00:33:28]: Sí, pero separemos lo tipo a nivel QA y podemos llenarlo con Ivo y tipo testearlo con Ivo.

**Tomás Groshaus** [00:33:38]: Y aviéndense de los tiempos de QA por ahora.

**Tomás Groshaus** [00:33:43]: Más que nada necesitamos con Ivo para organizarnos con todo lo que se viene el tiempo de ustedes, básicamente.

**Tomás Groshaus** [00:33:50]: Yo lo haría todo de una y bueno, ¿eh?

**Emanuel Casco** [00:33:52]: O sea, porque siento que no te vas a ahorrar mucho tiempo por hacerlo uno primero y después el otro.

**Emanuel Casco** [00:33:56]: Dale, como full foco.

**Emanuel Casco** [00:33:59]: Y luego...

**Emanuel Casco** [00:33:59]: Yo...

**Emanuel Casco** [00:33:59]: Yo

**Emanuel Casco** [00:34:00]: Demos ya como prioridad y lo cerramos.

**Tomás Groshaus** [00:34:04]: Ok, bueno, quieren tomarse dos minutos y vamos a la refi.

**Tomás Groshaus** [00:34:09]: Dale.

**Tomás Groshaus** [00:34:10]: Dale a los dos minutos.

**Tomás Groshaus** [00:34:12]: A veces bien.

**Tomás Groshaus** [00:34:14]: Dale, y veinte arrancamos.

**Tomás Groshaus** [00:34:15]: Bye.

**Ivo Kalaizic** [00:34:16]: Bye.

**Ivo Kalaizic** [00:34:17]: Abrazo, chau, chau.
