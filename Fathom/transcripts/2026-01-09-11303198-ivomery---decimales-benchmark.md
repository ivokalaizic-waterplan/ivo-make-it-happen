# Ivo:Mery - Decimales benchmark
**Date:** 2026-01-09T13:19:22Z
**URL:** https://fathom.video/calls/524472445
**Participants:** María Berrocal (maria.berrocal@waterplan.com), Ivo Kalaizic (ivo.kalaizic@waterplan.com)

---

**María Berrocal Olmos** [00:00:01]: Háblémoslo.

**María Berrocal Olmos** [00:00:02]: O podemos otra en base, digo.

**Ivo Kalaizic** [00:00:04]: Dale.

**María Berrocal Olmos** [00:00:06]: A ver.

**María Berrocal Olmos** [00:00:10]: Hubo tantos tickets esta semana que no sé cuál es.

**Ivo Kalaizic** [00:00:13]: Sí, una de las tareas que voy a intentar ver, bueno, me tengo que hacer, pero que no sé cuándo lo voy empezar, es tipo depurar un poco más el backlog de la cantidad de cosas que tenemos.

**María Berrocal Olmos** [00:00:28]: Good luck.

**María Berrocal Olmos** [00:00:32]: Creo que acá lo tengo.

**Ivo Kalaizic** [00:00:34]: Ya igual te estoy proyectando.

**María Berrocal Olmos** [00:00:36]: Perfecto.

**María Berrocal Olmos** [00:00:37]: Ah, José.

**María Berrocal Olmos** [00:00:41]: O sea, el issue puntual es que, ya vamos hablando de esto a ser tres Qs, ¿no?

**María Berrocal Olmos** [00:00:48]: Ah, Vale, la plataforma.

**María Berrocal Olmos** [00:00:51]: Siempre se ha dicho que tiene que ser algo de setting, tiene que tener cada cliente su propio, cada company su propio.

**María Berrocal Olmos** [00:00:57]: Gracias.

**María Berrocal Olmos** [00:00:58]: No.

**María Berrocal Olmos** [00:00:59]: No.

**María Berrocal Olmos** [00:00:59]: No.

**María Berrocal Olmos** [00:01:00]: Nomenclatura, como funcionalidad, configuración, lo que sea, pero es súper difícil.

**María Berrocal Olmos** [00:01:07]: Les tenemos a Tobías, por ejemplo, que su target, que es el WUR, que es un racional, un ratio, pero él quiere ver los tres decimales después del ratio, ¿y qué pasa?

**María Berrocal Olmos** [00:01:20]: Pareciera que es un número grande, tipo mil, diez mil, o sea, porque quiere ver tres decimales, ¿cierto?

**María Berrocal Olmos** [00:01:26]: Nosotros se lo hemos bajado a dos, se lo hemos bajado a uno, pero siempre es súper difícil, quiere ver tres.

**María Berrocal Olmos** [00:01:32]: Entonces el tema es que no se diferencien los decimales en la plataforma, ¿cierto?

**Ivo Kalaizic** [00:01:39]: Sí.

**Ivo Kalaizic** [00:01:41]: Ese es el issue, perfecto.

**María Berrocal Olmos** [00:01:44]: Entonces, hay varias formas de atacarlo, para mí la más sencilla que es como ponerle un parche a la situación.

**María Berrocal Olmos** [00:01:51]: ¿Y por qué digo parche?

**María Berrocal Olmos** [00:01:53]: Porque realmente esto debe ser configurado desde settings.

**María Berrocal Olmos** [00:01:56]: Pero lo podemos hacer, por all companies, ya lo hablé con los discípulos.

**María Berrocal Olmos** [00:02:00]: Designers.

**María Berrocal Olmos** [00:02:03]: Diferenciar visualmente los decimales, and that's it.

**María Berrocal Olmos** [00:02:08]: Tipo, más allá de un tema de escoger si son dos o uno, cuántos quieres ver, no importa, te los diferencio visualmente cuántos tengas.

**Ivo Kalaizic** [00:02:19]: A mí me encanta.

**María Berrocal Olmos** [00:02:25]: Que harían tipo así.

**María Berrocal Olmos** [00:02:33]: Para mí está buenísimo.

**María Berrocal Olmos** [00:02:35]: Como más chiquitos y con más chiquitos.

**Ivo Kalaizic** [00:02:37]: La imagen creo que era de Revolute, Wise, no sé, también me re gustó cómo quedó.

**María Berrocal Olmos** [00:02:43]: Sí, el tema es, porque yo en un principio lo había planteado para que sean solo más chiquitos.

**Ivo Kalaizic** [00:02:49]: Pero puede llegar a dar confusión o qué.

**María Berrocal Olmos** [00:02:53]: Pero íbamos a tener un caso donde se veía, o sea, nuestra plataforma, cuando te vas a una tabla.

**María Berrocal Olmos** [00:03:01]: No sé cómo la ves tú, pero cuando te vas a una tabla, y esto es un issue general del design system y tipo de los componentes, etc., los números son chiquitos, o sea, están a 14 píxeles, which is nada, y ponerlos, solamente cambiarles el tamaño no era suficientemente visual, ¿se entiende?

**María Berrocal Olmos** [00:03:25]: Bien.

**María Berrocal Olmos** [00:03:26]: Entonces, por eso dijimos como, bueno, no solo le cambiamos el tamaño, sino que además le vamos a cambiar la transparencia para que se doble, entienda la intención de que ese número es un decimal.

**Ivo Kalaizic** [00:03:38]: Bien.

**Ivo Kalaizic** [00:03:39]: ¿Por qué lo hice?

**María Berrocal Olmos** [00:03:40]: No sé.

**María Berrocal Olmos** [00:03:41]: Tipo, si estás viendo una tabla gigante como la de Waterstoreship, no te das cuenta que son decimales si no los tienes tipo transparentes.

**María Berrocal Olmos** [00:03:51]: Es mi solución.

**María Berrocal Olmos** [00:03:53]: Ahora, ¿qué fue lo que les puse acá?

**María Berrocal Olmos** [00:03:54]: ¿Qué lo que puse acá?

**María Berrocal Olmos** [00:03:55]: puse ¿Qué es la solución, la solución Fast and Furious.

**María Berrocal Olmos** [00:03:59]: ¿Qué

**María Berrocal Olmos** [00:04:00]: Pero no estoy muy segura cómo se va a implementar esto en la plataforma.

**María Berrocal Olmos** [00:04:06]: O sea, si es un fix que va a meter EMA solo a Coca-Cola o es un fix que le va a meter EMA a todas las compañías.

**Ivo Kalaizic** [00:04:15]: Mira, yo, este tema de decimales, si querés, tal vez me voy un poco de scope de este ticket, porque, va, en realidad es mentira, sigo en esto, pero un poco más allá de diseño.

**Ivo Kalaizic** [00:04:26]: Yo levanté también el tema de decimales y demás, y justo ayer todavía se levantó, porque también hubo un error y demás.

**Ivo Kalaizic** [00:04:39]: Y estaba pensando, porque totalmente, como decís, por ejemplo, tenemos un withdrawals, que el número puede ser en millones, y tal vez ver sobre millones de decimales no me interesa.

**Ivo Kalaizic** [00:04:51]: Y tenemos un WUR, que ver decimales me interesa.

**Ivo Kalaizic** [00:04:56]: Ahora también tenemos el tema de qué cantidad de decimales vemos.

**Ivo Kalaizic** [00:05:00]: Creo que los dos tenemos identificados, tipo cantidad y cómo los diferenciamos.

**María Berrocal Olmos** [00:05:09]: Ahora, por ejemplo, mira esto.

**María Berrocal Olmos** [00:05:11]: Uno pensaría que esto es un millón.

**María Berrocal Olmos** [00:05:12]: No, no es un millón, es uno punto, y todos estos son decimales.

**María Berrocal Olmos** [00:05:17]: Uno punto, decimales.

**María Berrocal Olmos** [00:05:19]: Dieciocho punto, decimales.

**María Berrocal Olmos** [00:05:22]: ¿Por qué hay tantos decimales?

**María Berrocal Olmos** [00:05:23]: No tengo ni puta idea, ¿me entiendes?

**María Berrocal Olmos** [00:05:25]: Y si lo llegamos a poner solo tres, que quede dieciocho punto siete, uno, nueve, parecería dieciocho mil setecientos diecinueve, ¿me entiendes?

**María Berrocal Olmos** [00:05:35]: Sí, tú no.

**María Berrocal Olmos** [00:05:35]: That's what we were.

**María Berrocal Olmos** [00:05:37]: De entrada, hay que meter una configuración que sea, o mostramos tres para todos, o cada quien hace lo que se le dé la gana.

**María Berrocal Olmos** [00:05:51]: Porque mira, acá, por ejemplo, te muestro dos.

**María Berrocal Olmos** [00:05:53]: Eso es lo raro.

**María Berrocal Olmos** [00:05:56]: ¿Qué le pasó a esto?

**María Berrocal Olmos** [00:05:57]: Cáncel.

**María Berrocal Olmos** [00:06:02]: Acá te muestro 3, acá hay 2, acá hay 10, ¿me entiendes?

**María Berrocal Olmos** [00:06:12]: Creo que si veo la calculadora veo 3.

**María Berrocal Olmos** [00:06:16]: Sí, no, yo ahora voy a tener que revisar eso y levantarlo hoy.

**Ivo Kalaizic** [00:06:20]: Para mí, si me decís a mí qué es lo que me da la utilidad que pase, que desde settings se pueda configurar la cantidad de decimales por metric, porque para mí creo que se termina definiendo por metric, no sé vos qué pensás, escuché tus thoughts.

**Ivo Kalaizic** [00:06:34]: Pero si vamos a Data Gathering, a Company Catalog, mira, ahí tenés como las variables que nosotros tenemos, ¿no?

**Ivo Kalaizic** [00:06:48]: Sí.

**Ivo Kalaizic** [00:06:48]: Si nosotros podríamos identificar para cada variable, tener un default, pero para cada variable poder identificar la cantidad de decimales que tenemos.

**Ivo Kalaizic** [00:07:00]: Y después poder, tal vez, flasheando, pero decimos que pensaba, poder tener un checkbox de tipo, ¿querés diferenciar los decimales?

**Ivo Kalaizic** [00:07:11]: Tipo, sí o no, no sé, yo lo pienso como para, porque vos me dijiste, ¿esto lo vamos hacer para Coca-Cola?

**Ivo Kalaizic** [00:07:16]: ¿Sí o no?

**Ivo Kalaizic** [00:07:18]: Tipo, perdón, ¿sólo para Coca-Cola o para todas las companies?

**Ivo Kalaizic** [00:07:21]: Bueno, tal vez, si me dice a mí, para mí lo más lindo sería que cada company pueda desear cómo quiere ver la información.

**Ivo Kalaizic** [00:07:28]: No sé vos, si pensás que ya es muy complejo.

**María Berrocal Olmos** [00:07:31]: Yo no lo veo complejo, yo lo vería inconsistente.

**María Berrocal Olmos** [00:07:36]: O sea, yo estoy de acuerdo con que una company pueda seleccionar cuántos decimales ve, pero la forma visual como ve los decimales debería ser la misma para todos.

**María Berrocal Olmos** [00:07:47]: Tipo, no importa si es un número, dos, tres o cinco decimales, debería ser todo menor tamaño y con el 50% de transparencia esos números.

**María Berrocal Olmos** [00:08:00]: No importa qué definan.

**María Berrocal Olmos** [00:08:02]: Ahora, lo que tú dices de meterlo acá por default en el Data Gathering, no estoy muy segura.

**María Berrocal Olmos** [00:08:07]: O sea, como esto es una tula interna, el cliente no lo ve.

**Ivo Kalaizic** [00:08:12]: No, de hecho, para mí no creo que fuera en Data Gathering porque de ahí creo que es donde se absorbe la data y yo lo que no quiero es que la cantidad de decimales afecten en el cálculo de Trash.

**María Berrocal Olmos** [00:08:25]: Eso es lo que pasa, que eso es lo que levanta a Ema todo el tiempo, que cuando él le acorta los decimales, por ejemplo, los del baseline, el porcentaje de impacto cambia, o el target cambia, o el production cambia.

**María Berrocal Olmos** [00:08:38]: Entonces Tommy Gross siempre lo ha pujado como, bueno, pero no cambies el cálculo, solamente muéstrame.

**María Berrocal Olmos** [00:08:44]: Con el front end.

**María Berrocal Olmos** [00:08:46]: Solamente muéstrame el valor con los decimales.

**María Berrocal Olmos** [00:08:52]: Entonces ahí es donde entran como en el encuentro de titanes de no, porque me cambien.

**María Berrocal Olmos** [00:09:00]: Igual el número porque lo redondea para arreglar un X.

**María Berrocal Olmos** [00:09:04]: Entonces, ese es el issue.

**María Berrocal Olmos** [00:09:06]: O sea, yo siento que a nivel visual tenemos una solución, Ivo, yo creo que lo que hay que definir es a nivel negocio qué queremos que pase y cómo queremos implementarlo, si es un tema para solo Coca-Cola, para todas las companies, lo queremos meter en settings, tipo acá ya necesitamos el wisdom de desarrollo.

**María Berrocal Olmos** [00:09:30]: Para entender cómo, qué tan complejo es a nivel técnico y cuál es el impacto, por ejemplo, en el tema de los cálculos de todas las operaciones que hace, que hacemos en respond, ¿no?

**María Berrocal Olmos** [00:09:42]: O sea, water stewardship, target tracking.

**Ivo Kalaizic** [00:09:44]: Bueno, hagamos esto y decime qué te parece y si crees que es la mejor idea.

**Ivo Kalaizic** [00:09:49]: ¿Te parece que vamos a tocar con un tema que va ser decimales?

**Ivo Kalaizic** [00:09:54]: Y también lo puedo llevar a la refi y decir, che, tenemos, lo mejor hablar con Sofi, sería yo.

**Ivo Kalaizic** [00:09:59]: ¡Gracias!

**Ivo Kalaizic** [00:10:00]: Antes de, para llevarlo en el momento y decir, hay dos temas.

**Ivo Kalaizic** [00:10:04]: Por un lado, la diferenciación, que esto debería ser como cross company, cross platform.

**Ivo Kalaizic** [00:10:10]: Y por otro lado, tenemos el cantidad.

**Ivo Kalaizic** [00:10:12]: El tema de cantidad en el frontend, lo podemos discutir de cuál es la mejor solución y qué tipo todos nos llevemos nuestras ideas.

**Ivo Kalaizic** [00:10:19]: Y por otro lado, el tema de decimales, lo llevamos tu propuesta, que está bárbara, y lo ponemos en común a ver qué opinan.

**Ivo Kalaizic** [00:10:26]: Y si querés, no sé qué pensás, yo puedo llevarme, tomar esta, decime de vos qué pensás, ahí yo también después lo puedo hablar con Tommy.

**Ivo Kalaizic** [00:10:38]: Puedo preguntarle a los SSPs que opinan, y que ver si tienen la posibilidad de, o los SSPs que usen target tracking o water stewardship, tipo si tienen el momento en su reunión con el cliente para validarlo.

**Ivo Kalaizic** [00:10:54]: No creo que, tampoco me parece una decisión cross como, wow, para que cambie todo y que necesito.

**Ivo Kalaizic** [00:11:00]: Tenemos todo el feedback de todos, pero para aumentar, no sé, ¿qué pensás?

**María Berrocal Olmos** [00:11:04]: Sí, o sea, yo creo que una vez, o sea, me gusta el plan, yo creo que una vez tengamos validación técnica de cuál sería la mejor forma de abordar el issue.

**María Berrocal Olmos** [00:11:18]: Ya podemos ir con el CCP, como ahí tenemos esta idea, ¿qué opinan?

**María Berrocal Olmos** [00:11:25]: Y, por ejemplo, se la podemos mostrar, se la podemos mostrar a PYG, se la podemos mostrar a Tobias, y una vez estamos OX, tipo, deployamos cambios.

**María Berrocal Olmos** [00:11:36]: Porque es un cambio visual, tampoco es que afecta a nada mucho.

**Ivo Kalaizic** [00:11:40]: Sí, no, no, no, es un cambio visual y en el, en el, tarea buenísimo que esté acompañado, va, no sé, sí, no sé si hay una, tiene que haber una, te iba a decir, creo buenísimo haber acompañado de la configuración de cantidad de decimales, pero la verdad que no tiene por qué, esto puede ser más rápido y de una y después de decimales los laburamos mejor.

**Ivo Kalaizic** [00:12:00]: A fondo.

**María Berrocal Olmos** [00:12:02]: Emma es el que nos puede decir, es tipo, el scope de qué tan difícil puede ser meterlo en settings.

**María Berrocal Olmos** [00:12:08]: Porque de nuevo, esto lo venimos hablando hace Qs, o sea, decimales.

**María Berrocal Olmos** [00:12:14]: Sí, ya está.

**María Berrocal Olmos** [00:12:15]: O sea, tal vez soy muy esperanzado, pero digo, siento que es un tema re boludo para que hablemos tanto, hay tantos problemas tan difíciles que, tal vez estoy menoscreciando, O sea, a mí me parece un gran tema abordar, porque es, hace parte de la comunicación visual de la plataforma.

**Ivo Kalaizic** [00:12:41]: Sí.

**María Berrocal Olmos** [00:12:42]: Que no es lo mismo en 1.78 que en 1.7845321.

**María Berrocal Olmos** [00:12:49]: No sé.

**María Berrocal Olmos** [00:12:51]: Pero bueno, eso que te tienes que ir, avísame cualquier cosa, lo llevaría a la refi el martes, y lo...

**María Berrocal Olmos** [00:13:00]: Ya hablamos.

**María Berrocal Olmos** [00:13:01]: Vale, listo.

**Ivo Kalaizic** [00:13:02]: Llegamos.

**Ivo Kalaizic** [00:13:02]: Este yo llego al tema de decima, tipo, como decimales, se me cayó.

**Ivo Kalaizic** [00:13:07]: Bueno, dale.

**María Berrocal Olmos** [00:13:08]: Bye.

**María Berrocal Olmos** [00:13:08]: Chao, chico.
