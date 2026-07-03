# logistics next steps - pueden aca?
**Date:** 2026-06-09T20:46:39Z
**URL:** https://fathom.video/calls/700983624
**Participants:** Tomas Gomez (tomas.gomez@waterplan.com), Felipe Gutiérrez (felipe.gutierrez@waterplan.com), Jordán Pinghelli (jordan.pinghelli@waterplan.com), Ivo Kalaizic (ivo.kalaizic@waterplan.com)

---

**Felipe Gutierrez Mosquera** [00:00:00]: Conseguir cómo vamos a estructurar la data en la plataforma, y además de cómo vamos a estructurar la data, cómo vamos a estructurar los sites, los proyectos, que por eso les pasé el videíto, no sé si lo llegaron a ver, si no lo podemos ver ahora.

**Felipe Gutierrez Mosquera** [00:00:18]: Sí.

**Ivo Kalaizic** [00:00:21]: Para mí, Pipe, igual, lo de cómo estructurar la data y eso, tipo, antes de pasar a eso, yo lo que justo recién lo hablé con Grossa, tipo, en cómo entender ver esto, creo que el objetivo sería intentar ver cómo ellos lo quieren ver, y en función de eso vamos a poder entender un poco más qué es lo que, cómo vamos a estructurar.

**Ivo Kalaizic** [00:00:43]: yo justo ahí mandé esto, esto implica un poco el framework que ellos utilizan, ¿viste?

**Ivo Kalaizic** [00:00:51]: Como que cada tramo particular, por particular se llama como el transport chain element este, y cada tramo puntualmente en función de cuándo...

**Ivo Kalaizic** [00:00:59]: ¿Cuánto traslada y en qué tipo de traslado es?

**Ivo Kalaizic** [00:01:06]: Termina generando un factor de emisión y es muy similar a lo que hacemos hoy con Scope Plus.

**Ivo Kalaizic** [00:01:10]: O es una computed metric a nivel como target tracking.

**Ivo Kalaizic** [00:01:13]: El tema, y lo que habla con Tommy, es tipo, si ellos tienen un tramo que va a un...

**Ivo Kalaizic** [00:01:20]: ¿Cómo lo quieren ver?

**Ivo Kalaizic** [00:01:22]: ¿Lo quieren ver por distintos hubs?

**Ivo Kalaizic** [00:01:26]: No, eso lo quieren ver como país de destino.

**Felipe Gutierrez Mosquera** [00:01:31]: O sea, quieren ver por un lado proyectos, que cada proyecto puede tener varios países de destino, y por otro lado quieren ver emisiones.

**Ivo Kalaizic** [00:01:37]: Es que cada proyecto, depende, porque vos podés hacer un proyecto que, por ejemplo, en este barquito, haga que se viajen containers, y cada tramo tiene un emision factor distinto.

**Ivo Kalaizic** [00:01:48]: Entonces, necesitas entender en qué tramo entra el proyecto, porque, dependiendo el tramo, el emision factor del proyecto.

**Ivo Kalaizic** [00:01:58]: Claro, pero eso va a impactar.

**Ivo Kalaizic** [00:02:00]: O sea, finalmente va a impactar en distintos países.

**Jordán Pinghelli** [00:02:04]: Según lo que leí ahí en lo que charlaron, ellos como que, bueno, las notas que tomaron ustedes, creo, ellos asignan las emisiones al país de destino.

**Jordán Pinghelli** [00:02:13]: Entonces, ellos se llevan las emisiones, pero también hay distintos tipos de contratos con distintos niveles de responsabilidades según el Incoterm.

**Jordán Pinghelli** [00:02:19]: Entonces, también, en teoría, están registrando cada tramo en función de ese contrato y quién se lleva la responsabilidad por ese transporte.

**Jordán Pinghelli** [00:02:27]: Entonces, las emisiones se asignan también por la responsabilidad del contrato.

**Jordán Pinghelli** [00:02:31]: Eso es lo último que entendí.

**Felipe Gutierrez Mosquera** [00:02:34]: O sea, las emisiones se asignan según la responsabilidad.

**Felipe Gutierrez Mosquera** [00:02:39]: Ahora, ¿puedes decir como un ejemplo?

**Felipe Gutierrez Mosquera** [00:02:42]: Yo lo que tengo que entender es el consigní, el que aparece ahí como consigní, es el que...

**Felipe Gutierrez Mosquera** [00:02:47]: Al que le cuentan.

**Ivo Kalaizic** [00:02:48]: Al que le cuentan las emisiones siempre.

**Ivo Kalaizic** [00:02:51]: Sí, eso es lo que dijo Ceci y Tabián.

**Ivo Kalaizic** [00:02:54]: Claro, o todo lo que viene antes a la izquierda de ese consigní, se mete todo en las emisiones de ese consigní.

**Felipe Gutierrez Mosquera** [00:02:59]: Entonces, si tienes un...

**Felipe Gutierrez Mosquera** [00:02:59]: Proyecto que afecta el TCE-3.

**Ivo Kalaizic** [00:03:06]: Estoy buscando en paralelo dónde está esto.

**Jordán Pinghelli** [00:03:26]: Ahí va.

**Jordán Pinghelli** [00:03:27]: Y en el archivo de data, en el de instructions, pienso que es, hay como un esquemita también.

**Jordán Pinghelli** [00:03:33]: Ahí al costado y en la multimodal, que es cuando incluyen más de un tipo de transporte, porque el multimodal sería solo por tierra.

**Jordán Pinghelli** [00:03:40]: Ahí, fíjate que abajo, dice que cuando es internacional, y ahí están, ¿ves?

**Jordán Pinghelli** [00:03:44]: Los diferentes, por lo que entiendo de arriba.

**Ivo Kalaizic** [00:03:59]: Escuchamos.

**Ivo Kalaizic** [00:03:59]: Sí.

**Jordán Pinghelli** [00:03:59]: Esto se refiere solamente a que captura la información o al que las emisiones, porque yo había entendido lo mismo, que las emisiones eventualmente, ellos por supuesto se las asignan al país destinatario.

**Ivo Kalaizic** [00:04:10]: Sí, para el cálculo final.

**Ivo Kalaizic** [00:04:17]: Esto es solo para el reglamento de información intermediaria, digamos.

**Felipe Gutierrez Mosquera** [00:04:22]: O sea, es para el cálculo de las emisiones, porque si vos tenés un ship que pasa, no sé, por Turquía y después llega a España, no es lo mismo que uno que va directo a España.

**Felipe Gutierrez Mosquera** [00:04:30]: Claro.

**Felipe Gutierrez Mosquera** [00:04:31]: Al fin y al cabo, todo va a España.

**Felipe Gutierrez Mosquera** [00:04:34]: Ok, eso lo diría.

**Felipe Gutierrez Mosquera** [00:04:35]: calcula en España.

**Felipe Gutierrez Mosquera** [00:04:36]: Sí, claro.

**Felipe Gutierrez Mosquera** [00:04:36]: Pero también puede pasar, que me parece que es importante, que puede ser una misma LED que vaya a distintos países y que el proyecto, o sea, ponele, sale del warehouse de Turquía y de ahí hay uno que va para España o otro que va para Francia.

**Felipe Gutierrez Mosquera** [00:04:51]: Entonces el proyecto mejora la eficiencia del packing de ese transporte, pero ese proyecto va a estar finalmente...

**Felipe Gutierrez Mosquera** [00:05:00]: impactando en España y en Francia, ¿entendés?

**Felipe Gutierrez Mosquera** [00:05:03]: O va a estar disminuyendo las emisiones de todos los países.

**Ivo Kalaizic** [00:05:06]: Pero depende, mirá, si te fijás, por ejemplo, si te venís a esta línea, estoy compartiendo, ¿no?

**Ivo Kalaizic** [00:05:12]: Sí, sí.

**Ivo Kalaizic** [00:05:13]: Perfecto, en esta línea, por ejemplo, este es un pedido que se mandó a un cliente, empezó en Search Republic, termina Search Republic, pero si te fijás, tiene una primera línea, tipo una primera leg, después viene una segunda leg, después viene una tercera leg, que termina, tipo, viene a Turquía, esto es, perdón, mirá, vamos a vuelta, perdón, Voy a hacer sumas, sí.

**Ivo Kalaizic** [00:05:36]: ¿Puedes fijar las pilas de arriba?

**Ivo Kalaizic** [00:05:41]: Así vamos viendo que...

**Ivo Kalaizic** [00:05:43]: No, no puedo, porque soy vivo only, soy vivo.

**Felipe Gutierrez Mosquera** [00:05:46]: Pero, sí, Ivo, eso pasa por varios países, pero si te fijás, la columna de más de la derecha, que es la de impact de tonelada de CO2, es una sola, y se imputea solamente en un país.

**Ivo Kalaizic** [00:05:58]: Que es el primero de todos.

**Ivo Kalaizic** [00:05:59]: Vamos.

**Ivo Kalaizic** [00:05:59]: ¡Gracias!

**Ivo Kalaizic** [00:06:00]: Claro, pero acá está, tipo, por LEG, LEG 1, LEG 2, te dice la distancia y el factor de emisión.

**Ivo Kalaizic** [00:06:08]: Y lo que termina calculando acá, que creo que lo que vos decís, es como la cantidad de emisiones que básicamente suman y multiplican a todos los distintos tramos.

**Ivo Kalaizic** [00:06:18]: Pero entendés que el proyecto de eficiencia puede ser en un tramo puntual, entonces por eso necesitaríamos entender paso a paso cómo sigue.

**Ivo Kalaizic** [00:06:29]: Acá está perfecto, tipo, viste que en términos de la data, de tipo, qué data necesitaríamos, yo creo que en la reunión de mañana podemos mostrar este Excel, y este Excel está perfecto, si esta data está bien, tipo, pero está muy El tema es que eso tiene, eso nos sirve a nosotros para las historic emissions, ¿verdad?

**Felipe Gutierrez Mosquera** [00:06:46]: Entonces, ¿cómo hacemos nosotros para calcular el impacto de un proyecto?

**Ivo Kalaizic** [00:06:52]: Es que hoy, o sea, con la realidad que tenemos hoy, no nos sirve de nada.

**Ivo Kalaizic** [00:06:59]: ¿Cómo lo hacemos para calcular?

**Ivo Kalaizic** [00:07:01]: ¿Ya queremos evaluar impacto?

**Jordán Pinghelli** [00:07:02]: Perdón, o lo dejamos para una segunda fase.

**Jordán Pinghelli** [00:07:04]: sea, mañana vamos a charlar sobre cómo quieren centralizar ellos los proyectos con la información básica de los proyectos y después vemos impacto o ya pedimos todo.

**Jordán Pinghelli** [00:07:11]: Es una excelente pregunta, perdón.

**Tomás Gómez** [00:07:13]: Es una excelente pregunta, sí.

**Tomás Gómez** [00:07:15]: O sea, la realidad es que esta data, uno, todavía no está en plataforma, ¿no?

**Tomás Gómez** [00:07:20]: Y sabemos que nos toma tiempo cargarla.

**Tomás Gómez** [00:07:23]: Ahora, si ese es el formato correcto y los valores son correctos, nosotros podríamos ya avanzar con esta data para cargar en plataforma.

**Tomás Gómez** [00:07:30]: Forma, sí.

**Ivo Kalaizic** [00:07:31]: No, estamos a un nivel más que definir y entender bien cómo podemos pensar, tipo, los sites, tipo, si quisiéramos cargar en la plataforma hoy actual, hay que entender bien la arquitectura que vamos a usar.

**Ivo Kalaizic** [00:07:46]: O sea, ¿yo le puedo cargar hoy Francia Emissions Scope 3 este número?

**Ivo Kalaizic** [00:07:51]: Sí, pero toda la parte, como lo que hacemos hoy con Scope 2, viste, que le imputeamos el raw value, pero después, si queremos calcularlo con activity y área,

**Ivo Kalaizic** [00:08:00]: Entonces hay que poder hacer una nueva esquema de arquitectura con legs o con sites, pero que el site no pueda aparecer, hay que pensarlo más, no estamos en medio de eso.

**Felipe Gutierrez Mosquera** [00:08:13]: Claro, ese es el tema, ese es lo que yo quería ver hoy, como que ese siento que es nuestro blocker, tipo, ¿cómo mierda vamos a hacer para estructurar toda esta data?

**Felipe Gutierrez Mosquera** [00:08:22]: Pero eso, tipo, yo también tengo que ver eso, ¿verdad?

**Ivo Kalaizic** [00:08:26]: Pero lo que yo quiero es, tipo, una vez que entendamos bien el problema y entendamos bien, tipo, cómo hacemos los proyectos, efectivamente, si hacemos usar legs o no, en función de lo que quieran ver, lo llevamos y eso, tipo, ingeniería lo va a resolver.

**Ivo Kalaizic** [00:08:42]: Pero, tipo, hoy no está la definición de cómo lo vamos a ver finalmente.

**Ivo Kalaizic** [00:08:46]: Y hoy ellos fuera de plataforma, ¿sí lo contabilizan?

**Jordán Pinghelli** [00:08:49]: ¿Ellos ven impacto hoy en día de alguna forma?

**Jordán Pinghelli** [00:08:51]: O sea, ¿este Excel le sirve a ellos así como está?

**Felipe Gutierrez Mosquera** [00:08:53]: Claro, pero este Excel, este Excel, está buena esa pregunta, porque ellos no ven impacto de...

**Felipe Gutierrez Mosquera** [00:09:00]: Los proyectos, ese es el tema, hoy impacto de los proyectos no existe en ningún lado, lo único que hacen es medir las emisiones de 2025, medir las emisiones de 2024, la de 2023, la de 2026, y tenés las emisiones de cada año.

**Felipe Gutierrez Mosquera** [00:09:13]: Y por otro lado tenés los proyectos que te dicen, este año, impliéndose este proyecto que afectó a estos países y ahorró esta plata, ¿me entiendes?

**Felipe Gutierrez Mosquera** [00:09:21]: Pero en ningún lado está el impacto, ¿se entiende?

**Felipe Gutierrez Mosquera** [00:09:25]: Esa diferenciación, que la conexión entre proyectos y emisiones no está hecha.

**Felipe Gutierrez Mosquera** [00:09:29]: Entonces, eso es como lo que tenemos que decidir nosotros.

**Jordán Pinghelli** [00:09:32]: Y te agrego, o sea, también tendríamos, así como con los proyectos de Volumetric, tendríamos que pedir las emisiones anticipadas que se esperan y después lo que eventualmente pase una vez que esté ocurriendo el proyecto, ¿no?

**Ivo Kalaizic** [00:09:42]: O sea, sí, más o menos, o sea, siempre nosotros trabajamos con estimado y a futuro, entonces eso lo resolvemos.

**Ivo Kalaizic** [00:09:49]: Ok.

**Ivo Kalaizic** [00:09:50]: Tipo, después, en target tracking, la filosofía que se toma es que, tipo, vos proyectás y los proyectos son futuros y te permite modelar, y después la data real y el impacto real.

**Ivo Kalaizic** [00:10:00]: Viene representado en la data a medida que va pasando el tiempo.

**Ivo Kalaizic** [00:10:03]: Bárbaro.

**Ivo Kalaizic** [00:10:04]: Lo que tiene y lo que decía Pipe es que, por ejemplo, mira, mira, si vemos este proyecto, el chabón, o hay alguno que justo te lo vi, mira, Switch from using 40-foot containers instead of 20-foot containers due to portal handling upgrades, no sé qué.

**Ivo Kalaizic** [00:10:18]: Y este proyecto, acá lo que te dice es tipo, che, ahorró 133 mil dólares, pero no tiene nada que ver con, o sea, acá te dice, ya, reduction of CO2 emissions.

**Ivo Kalaizic** [00:10:28]: Este tipo está muy high level, entonces.

**Ivo Kalaizic** [00:10:31]: Y esto, sin duda, podríamos nosotros decir un port, que el port sea port of Nacala, y cada vez que pasa el proyecto por ahí, podemos modelar esto, entonces.

**Ivo Kalaizic** [00:10:42]: Pero...

**Jordán Pinghelli** [00:10:43]: Sí, yo creo que con la información del Excel, capaz se podría, igual hay que validarlo, estoy de acuerdo con ellos, para ver cómo quieren, o cómo se imaginan eventualmente ver el impacto de los proyectos en el cálculo.

**Jordán Pinghelli** [00:10:51]: Pero tarde o temprano se debería ver, porque si cambia la ruta, cambian los kilómetros, si cambia el producto, cambia el peso del producto, si cambia el vehículo...

**Jordán Pinghelli** [00:11:00]: El vehículo cambia el factor de emisión del combustible del vehículo.

**Jordán Pinghelli** [00:11:03]: Como que con todos esos inputs que ya tenéis en el Excel, creo que lo deberíamos ver impactado.

**Jordán Pinghelli** [00:11:07]: ¿Se entiende?

**Ivo Kalaizic** [00:11:10]: Totalmente.

**Felipe Gutierrez Mosquera** [00:11:11]: O sea, eso es lo que nos falta, es que cómo hacer esta conexión.

**Felipe Gutierrez Mosquera** [00:11:14]: Yo lo que me imagino es, vos cargas un proyecto y le pones en qué site se impactaría.

**Felipe Gutierrez Mosquera** [00:11:20]: Por ejemplo, ahí le pondrías impacta en China, en Vietnam, en Dubái y South Africa.

**Felipe Gutierrez Mosquera** [00:11:24]: Y después, las demás variables también, que eso, no sé, veremos cómo lo hacemos.

**Felipe Gutierrez Mosquera** [00:11:30]: Pero que el site termina siendo el destination, location, porque eso es lo que ven para reportar, para bajar las emisiones, para bajar los costos.

**Felipe Gutierrez Mosquera** [00:11:41]: Y a veces siempre miran al destination.

**Ivo Kalaizic** [00:11:45]: O sea, para mí depende, Teo, porque, Teo, déjame ver la estructura.

**Ivo Kalaizic** [00:11:52]: Pero básicamente, por ejemplo, imagínate que tenemos dos países, Italia y Francia.

**Ivo Kalaizic** [00:11:58]: Y él, en...

**Ivo Kalaizic** [00:12:00]: Algunos de los tramos pasan por este puerto.

**Ivo Kalaizic** [00:12:03]: Acá estos.

**Ivo Kalaizic** [00:12:04]: China, esto impacta, no sé, en estos países.

**Ivo Kalaizic** [00:12:10]: En realidad, no es que está impactando en el site.

**Ivo Kalaizic** [00:12:15]: O sea, la derivada impacta en el site.

**Ivo Kalaizic** [00:12:18]: Pero en realidad esto impacta en la lega, ¿entendés?

**Ivo Kalaizic** [00:12:23]: Sí, estoy de acuerdo.

**Ivo Kalaizic** [00:12:26]: Entonces, y si vos dijeras impacta en el site, por ejemplo, si vos dijeras impacta en el site, es como que en cuánta emisión, y depende del tramo, porque, y depende de qué es el proyecto.

**Ivo Kalaizic** [00:12:42]: Porque si es usar electric vehicles en algo y hace que se reduzca la cantidad, el emission factor, porque los tiranos son los mismos, va a impactar en una parte, no sé, estoy...

**Ivo Kalaizic** [00:12:55]: Si no se entiende, es así.

**Jordán Pinghelli** [00:12:58]: Se reentiende, man.

**Felipe Gutierrez Mosquera** [00:12:59]: Se reentiende, pero...

**Felipe Gutierrez Mosquera** [00:13:00]: Yo eso lo veo como, o sea, veo dos opciones, una simple que es, tipo, eso calcularlo todo vos, a mí solo me importa que me digas cuánto va a impactar las emisiones de CO2 en el site, que es como están armados los proyectos ahora, tipo, vos un site de manufacturing no le decís, ¿cómo vas, por qué vas a ahorrar 30 kilowatt hora de electricidad?

**Felipe Gutierrez Mosquera** [00:13:24]: ¿Por qué haces una mejora?

**Felipe Gutierrez Mosquera** [00:13:27]: ¿Se entiende?

**Felipe Gutierrez Mosquera** [00:13:27]: Como en esta planta.

**Ivo Kalaizic** [00:13:29]: No, sí, lo sé.

**Ivo Kalaizic** [00:13:31]: Algo que por si te preguntás.

**Ivo Kalaizic** [00:13:32]: Uso, uso, soy Tommy, pero para...

**Ivo Kalaizic** [00:13:35]: Tipo, vos le decís, che, voy a cambiar esta máquina en el proceso, voy a consumir menos natural gas, voy a consumir más, consumo menos gas, pero consumo más energía, pues la enchufa la pared.

**Felipe Gutierrez Mosquera** [00:13:45]: Y ahí se calcula el impacto de emisiones Claro, pero a mí no me importa si cambias la máquina 1, la máquina 2, o el lavarropas del mercado, ¿me entiendes?

**Felipe Gutierrez Mosquera** [00:13:54]: Eso está en la Project Description, pero en el cálculo del impacto no me importa qué hiciste.

**Felipe Gutierrez Mosquera** [00:13:58]: Sí, porque al fin...

**Ivo Kalaizic** [00:14:00]: Y todo te termina agrupando la cantidad de electricidad que consumiste, entonces es como que es cierto, no te importa a nivel línea porque no tenés la granularidad, pero acá justamente la granularidad, tipo, creo que depende, en uno no importa la granularidad y en otro importa la granularidad, Jordi.

**Felipe Gutierrez Mosquera** [00:14:16]: Bueno, por eso, pero para mí, como en una primera versión lo podemos hacer que ellos hagan el cálculo, que no me importa la granularidad, y en una segunda versión, que sí necesita como mucha más cabeza de product y de desarrollo, es que en el proyecto, no sé, se me está ocurriendo ahora, sí, rápido, pero que en el proyecto vos puedas seleccionar qué LED te impacta, o algo así.

**Felipe Gutierrez Mosquera** [00:14:37]: Pero como que siento que para una primera indicación no es 100% necesario eso.

**Tomás Gómez** [00:14:41]: Les hago una pregunta, porque esto podría ser útil, por ejemplo, este proyecto que estamos viendo ahí, dice percentage of complete 100%, ¿no hay un número que pasamos de tener, no sé, 500 cargas con contenedores de 20 a contenedores de 40?

**Tomás Gómez** [00:14:58]: Pero si eso no lo sé.

**Felipe Gutierrez Mosquera** [00:15:00]: me importa, porque yo no sé cuándo, va, no sé, es como que si queremos llegar a esa agronegulidad se puede, pero por otro lado se puede hacer la pregunta cuál es el impacto, poneme las toneladas de CO2, ¿me entiendes?

**Felipe Gutierrez Mosquera** [00:15:10]: O poneme el natural gas ahorrado y te hago la conversión.

**Tomás Gómez** [00:15:15]: Sí, sí, si ellos quieren calcularlo ellos, yo no sé hasta dónde va el scope de la licencia.

**Ivo Kalaizic** [00:15:20]: O sea, para mí, en teoría, lo que estamos, lo que yo tengo en la cabeza y lo que se alineó con leadership es tipo, este Q, entendemos el problema, no desarrollamos nada, y una vez que lo entendamos bien, lo vamos a implementar el Q que viene, y por eso, tipo, Pipe, decime vos, si querés levantalo, pero para mí es clave que lo entendamos para entender qué tenemos que desarrollar.

**Ivo Kalaizic** [00:15:44]: Pero, tipo, hoy no estamos en condiciones de subir nada a la plataforma, tipo, yo prefiero no subir a la plataforma que subir, que el área de Francia tiene un impacto en una variable de scope 3 y que después la cambiamos totalmente.

**Felipe Gutierrez Mosquera** [00:15:55]: Pero es que, para mí no, o sea, estoy de acuerdo con lo de leadership y que...

**Felipe Gutierrez Mosquera** [00:16:00]: Desarrollar el Q que viene, pero para mí, para que no pase lo mismo que antes, es como hagámoslo con lo que tenemos, y que ellos lo prueben, y se lo tiramos así como está, porque si no, viste, es como que tres meses haciendo el, como nos pasó lo mismo con Gauri, viste, hicimos el kick-off de Net Zero Manufacturing, y recién lo usó el primer site, IHS, cuando hicimos el kick-off, después de seis meses de desarrollo.

**Felipe Gutierrez Mosquera** [00:16:25]: Y pero está bien, boludo, cuál es el aspecto, o sea, no sé.

**Felipe Gutierrez Mosquera** [00:16:28]: que es el aspecto, a mí es un desarrollo más iterativo, que usen un MVP, y que nos tiren todo el feedback, a ver, montón de feedback, pero que lo usen, porque si no es todo, viste, conceptual, en un sigma, y esto ya está desarrollado, o no es que tenemos que hacer algo más.

**Felipe Gutierrez Mosquera** [00:16:47]: No está desarrollado, boludo.

**Felipe Gutierrez Mosquera** [00:16:49]: Hosti, boludo, la tool ya está hecha, o sea, que lucen así, y que surcan de ahí el feedback, no que sea una cosa conceptual, teórica, ¿me entendés?

**Tomás Gómez** [00:17:00]: Ahí lo peligroso, Pipe, perdón, es meterse en un tema de que vas a estar recibiendo feedback de la plataforma, este botón, lo quiero en violeta, cuando vos en verdad necesitas saber qué porong hago con los 40 contenedores que cambiamos para coso, entonces estás saltando el paso 3 sin hacer el paso 2.

**Tomás Gómez** [00:17:15]: Yo estoy re de acuerdo que está bueno lo iterativo, ver algo en plataforma, meterse en reunión y compartir pantalla, pero si vos te compartís pantalla, este proyecto impacta así, y que venga como pasado con Rupert, que te diga, no, mira, este botón acá me gustaría tener una línea que sea punteada, y decir de qué cajeta me sirve una línea punteada, si todavía no sé ni cuántos proyectos voy a meter, ni la magnitud de la data, ni cuántas variables se deben abrir por led.

**Ivo Kalaizic** [00:17:41]: O sea, si querés, es un tema eso, o sea, pero no, me chupan huevos si quieren el color violeta, me tenés como que, eso le decimos sí, eso lo hacemos después y listo.

**Felipe Gutierrez Mosquera** [00:17:50]: Sí, está bien.

**Ivo Kalaizic** [00:17:57]: Para mí el cálculo, eso ya lo tienen igual.

**Jordán Pinghelli** [00:18:00]: O sea, por ahí no tienen las emisiones, pero tienen el presupuesto o lo que ahorraron, savings, entonces saben dónde, cómo hicieron ese cálculo.

**Jordán Pinghelli** [00:18:06]: Alguien lo hizo.

**Jordán Pinghelli** [00:18:07]: Entonces, no sé, ahorramos tanta hita, ¿por qué?

**Jordán Pinghelli** [00:18:09]: ¿Porque redujimos tantos kilómetros?

**Jordán Pinghelli** [00:18:11]: Bueno, entonces eso eventualmente es lo que nos va a servir a nosotros para calcular el impacto en emisiones.

**Jordán Pinghelli** [00:18:15]: Y no se me ocurre ninguna variable, que es lo que decía antes, de lo que esté en este Excel que están contabilizando actualmente por LEG, que no se vea, o que no se pueda ver impactada por el proyecto.

**Jordán Pinghelli** [00:18:27]: O sea, que yo creo que si capturamos lo que captura este Excel, capturamos todos los posibles cambios que puedan haber en este proyecto.

**Jordán Pinghelli** [00:18:33]: Es decir, que puede haber un proyecto que en su naturaleza sea, no sé, incluso redirigimos la ruta por otro lado.

**Ivo Kalaizic** [00:18:38]: Pero eventualmente va a tener impacto en kilómetros o en emisión o en destino, no sé.

**Ivo Kalaizic** [00:18:42]: ¿Cuáles pueden ser los posibles proyectos para reducir emisiones de scope test?

**Ivo Kalaizic** [00:18:46]: ¿Lo tenés en la cabeza?

**Ivo Kalaizic** [00:18:46]: Yo imagino reducir la distancia, seguro, reducir el cambio de transporte, entonces reducir el conversion factor.

**Jordán Pinghelli** [00:18:55]: Sí, aumentar por ahí el peso para ocupar la ocupación por el...

**Jordán Pinghelli** [00:19:00]: Los camiones o cosas así, se me ocurre.

**Jordán Pinghelli** [00:19:06]: Y después, y bueno, energía capaz en los warehouses también, si empezamos a contabilizar eso en los hubs, bueno, tener en cuenta que también hay eficiencias ahí, pero que hoy no veo nada, hoy es solo transporte por lo que viene el Excel.

**Ivo Kalaizic** [00:19:19]: No veo nada de centros de distribución.

**Jordán Pinghelli** [00:19:21]: En el, sí, en el Excel este no, pero en la lista de proyectos sí.

**Felipe Gutierrez Mosquera** [00:19:27]: Claro.

**Felipe Gutierrez Mosquera** [00:19:27]: Pero.

**Felipe Gutierrez Mosquera** [00:19:29]: ¿Me compartís el Excel?

**Tomás Gómez** [00:19:31]: Por favor.

**Ivo Kalaizic** [00:19:32]: O la carpeta.

**Ivo Kalaizic** [00:19:33]: Está todo en.

**Ivo Kalaizic** [00:19:34]: Ah, ok.

**Felipe Gutierrez Mosquera** [00:19:35]: En Clients, en Net Zero Carbon Logistics, ahí está todo.

**Felipe Gutierrez Mosquera** [00:19:39]: Dale.

**Ivo Kalaizic** [00:19:42]: Y una pregunta, Jordi, tipo, o sea, básicamente, yendo acá, un segundo, o sea, básicamente, para las de Scope, para calcular Scope 3, yo calculo el tramo con lo que yo.

**Ivo Kalaizic** [00:20:00]: Lleva todo lo que acabamos de ver, la fórmula de accidente, pero después acá en el warehouse es como la misma, los mismos emission factors de Scope 2.

**Jordán Pinghelli** [00:20:11]: Claro, salvo que también tengan transporte interno, que también deberíamos evaluarlo eventualmente si tienen algo, qué sé yo, no sé.

**Jordán Pinghelli** [00:20:17]: Porque pueden ser que, en realidad dentro del warehouse tenés como si fuese mini Scopes 2 y 1, porque también puedes tener, no sé, consumo de energía y también emisiones de alcance 1 dentro del warehouse.

**Jordán Pinghelli** [00:20:31]: No sé si tienen una cocinita, ponelo, o el UDSS, o el transporte de los vehículos, si tienen también las fuentes móviles dentro del warehouse.

**Jordán Pinghelli** [00:20:38]: O sea, eventualmente volvés a, como si fueses que haces un análisis de la fábrica, solamente que eventualmente después todos lo sumás en Scope 3.

**Ivo Kalaizic** [00:20:45]: O sea, el Scope 2, el Scope 3, siempre es mayor que el Scope 2.

**Jordán Pinghelli** [00:20:51]: En consumo masivo el Scope 3 es mayor que todos, sí.

**Jordán Pinghelli** [00:20:54]: O sea, porque Scope 3 considera Scope 2 más todos los legs.

**Jordán Pinghelli** [00:21:00]: En claro, pero no se llama Scope 2, es Scope 3 solamente.

**Jordán Pinghelli** [00:21:04]: Ok.

**Jordán Pinghelli** [00:21:05]: Pero sí es más grande, en volumen siempre.

**Jordán Pinghelli** [00:21:07]: Va a ser lo más grande de todo, Scope 3.

**Jordán Pinghelli** [00:21:09]: Y eso que esto es solo una parte, porque Scope 3 deberíamos incluir, como les decía también, la parte de inbound que no estamos contando hoy, por ejemplo, ¿no?

**Jordán Pinghelli** [00:21:16]: O todo el transporte, residuos, consumo, la vida del usuario, cosas que no estamos incluyendo.

**Jordán Pinghelli** [00:21:21]: Acá solo vemos producto terminado, transporte hasta destino final.

**Jordán Pinghelli** [00:21:25]: Ok.

**Ivo Kalaizic** [00:21:26]: ¿Eso es por el framework que ellos utilizan, no?

**Ivo Kalaizic** [00:21:30]: Claro, y porque es la información que pueden tener ellos, porque por ahí se vuelve muy difícil obtener información de cómo se...

**Jordán Pinghelli** [00:21:35]: es lo que vendimos en la licencia, ¿eh?

**Felipe Gutierrez Mosquera** [00:21:37]: O sea, la licencia entra solo Logistics, no entra Scope 3.

**Felipe Gutierrez Mosquera** [00:21:41]: O sea, entra Logistics, no todo Scope 3.

**Felipe Gutierrez Mosquera** [00:21:44]: Ponele cómo se desintegra el residuo en el basural es como un quilombo.

**Jordán Pinghelli** [00:21:48]: Bueno, tenés esa data, o lo podés estimar, pero entonces por eso solo se sirnen a esto.

**Jordán Pinghelli** [00:21:53]: Ok.

**Ivo Kalaizic** [00:21:55]: Para la reunión de mañana, entonces, lo que...

**Ivo Kalaizic** [00:21:57]: Si quieren, díganme qué opinan, pero yo lo que pienso...

**Ivo Kalaizic** [00:22:00]: Lo es esta gráfica así, entendemos que hacemos esto, ustedes cómo lo miden hoy, entendamos cómo lo miden hoy, nos pasaron este Excel, nosotros podemos traer esto, y para mí lo clave es lo de los proyectos, dos cosas son claves, uno es si ellos nos comparten este archivo, este de Hills, Europa, Logistics, está súper completo para todos los sites, estamos muy sólidos, lo podemos traer, o lo podemos pensar.

**Ivo Kalaizic** [00:22:28]: Ya lo tenemos, pero ese lo tenemos para Europa, y para Hills, Sí, pero está mal, ¿los comparaste?

**Ivo Kalaizic** [00:22:37]: Porque en el 2024 solamente hay leg uno, en 2025 hay un montón de otras legs, y no sé si está la misma data, tipo uno con el otro.

**Ivo Kalaizic** [00:22:48]: El de un show y este, y el de Europa, y...

**Felipe Gutierrez Mosquera** [00:22:51]: Mira, si querés acá te digo, tipo, ¿qué cosas nos faltan?

**Felipe Gutierrez Mosquera** [00:22:53]: sea, agarraría el único que esté bien, agarramos uno solo, y usemos ese.

**Felipe Gutierrez Mosquera** [00:22:59]: Gracias.

**Felipe Gutierrez Mosquera** [00:22:59]: Gracias.

**Ivo Kalaizic** [00:23:02]: Acá por ejemplo en 2024 nos mandaban a Data Mantri, acá no, tipo, este cayó en teoría el drop factor, esto puede ser por una metodología, habría que ver, lo de las legs, tipo acá era una sola leg, como te dije, acá son 5, 7, 5.

**Jordán Pinghelli** [00:23:28]: Son más legs porque es más granular el transporte, porque estamos en las divisiones más cercanas, ah no, porque es Hills, no, está bien, porque pensé que si eran, tipo, los regionales estaban incluyendo solamente un transporte, yo no había dicho nada de Hills, pensé que el archivo solo tenía de European, ok.

**Ivo Kalaizic** [00:23:48]: La verdad que tampoco lo entiendo, porque es de European Hills 2024, European City.

**Felipe Gutierrez Mosquera** [00:23:52]: Sí, es así, es porque Hills es una división dentro de Colgate, que a su vez está dividida en Europa, Norteamérica, varios.

**Felipe Gutierrez Mosquera** [00:24:00]: Porque son los que hacen comida para perro, y después están las divisiones de colgate, que hacen pasta de dientes, qué sé yo, y tenés Europa, Norteamérica, así, ¿se entiende?

**Ivo Kalaizic** [00:24:12]: Ok, o sea, Hills puede llegar hasta retail.

**Ivo Kalaizic** [00:24:16]: ¿Cómo, sorry?

**Jordán Pinghelli** [00:24:17]: Hills puede llegar hasta retail, porque yo entendía que era como más entre países, pone L, pero no hasta el centro, punto final de venta.

**Tomás Gómez** [00:24:25]: A Warehouse creo que llega.

**Tomás Gómez** [00:24:26]: No, todos, todos pueden llegar a, o sea, puede ser Walmart el que lo recibe, ¿viste?

**Felipe Gutierrez Mosquera** [00:24:32]: Claro.

**Felipe Gutierrez Mosquera** [00:24:32]: Pero ellos te ponen el país, pero bueno, o sea, no importa quién lo recibe.

**Felipe Gutierrez Mosquera** [00:24:38]: Pero eso sí, sea, colgate tiene, viste, varias divisions, una que es Norteamérica, Latam, APAC, qué sé yo, y una que es Hillsbet, y a su vez la de Hillsbet tiene sites en todo el mundo, porque es una marca que compraron por separado.

**Felipe Gutierrez Mosquera** [00:24:52]: Ah, perfecto.

**Felipe Gutierrez Mosquera** [00:24:53]: ¿Entiendes?

**Felipe Gutierrez Mosquera** [00:24:53]: Sí.

**Felipe Gutierrez Mosquera** [00:24:54]: Y entonces, Hillsbet es como que está subdivido en divisiones.

**Felipe Gutierrez Mosquera** [00:24:58]: Pero, nada.

**Felipe Gutierrez Mosquera** [00:25:00]: Como definamos bien para mañana que ya estamos, yo lo que haría posta es una tabla como la del bulk upload y centralicemos nos en los proyectos, y no, como que esto siento que lo tenemos que seguir mirando nosotros, no estamos tan sólidos todavía en la data que nos compartieron y poder revisarla.

**Ivo Kalaizic** [00:25:27]: Para mí podemos entenderlo mañana mostrando esto, tipo entendiendo qué quieren ver, cuál es la expectativa del accounting de esto, cómo lo esperan ver realmente, y explicar, para mí esto es clave, porque cuando queramos explicar por qué el proyecto, necesitamos granularidad, el impacto y en dónde se hace, porque justamente impacta acá, ¿entendés?

**Ivo Kalaizic** [00:25:51]: Bueno, ¿tienen 15 minutos más?

**Felipe Gutierrez Mosquera** [00:25:53]: Yo sí.

**Ivo Kalaizic** [00:25:54]: Yo no.

**Ivo Kalaizic** [00:25:55]: O cinco.

**Ivo Kalaizic** [00:25:58]: Vamos a andar tranquilos.

**Felipe Gutierrez Mosquera** [00:26:00]: GRI, si seguimos hablando acá y la terminamos así en como mañana.

**Tomás Gómez** [00:26:03]: Podemos recapitular como, para como simplificar un poco todo el porqué hay, o sea, claramente hay un millón de cosas para ver.

**Tomás Gómez** [00:26:11]: La reunión de mañana es porque esta fraca Patiño se va dos semanas de vacaciones y quiere dejar la data pedida que nos pueda llegar a faltar, ¿está bien?

**Tomás Gómez** [00:26:19]: ¿Hasta ahí estamos todos de acuerdo?

**Tomás Gómez** [00:26:20]: Si no, no estaría existiendo la reunión de mañana.

**Tomás Gómez** [00:26:23]: Sí.

**Tomás Gómez** [00:26:24]: Bien.

**Tomás Gómez** [00:26:25]: Mañana, entonces claramente no vamos a ir a sacarnos todas las dudas que tenemos de esto, porque hay un millón de dudas.

**Tomás Gómez** [00:26:32]: Está bien ya sea de la data, de por qué en Europa hay para 2024 solo un leg, por qué falta de atacar, por qué cambió el formato, los proyectos, etc.

**Tomás Gómez** [00:26:42]: De acá a que la flaca vuelva, ¿qué queremos atacar nosotros en estas dos semanas sabiendo que no vamos a deliberar nada en plataforma, lo que se planteó con la licencia y demás?

**Tomás Gómez** [00:26:53]: Entonces, ¿qué avance podemos tener de acá a dos semanas?

**Ivo Kalaizic** [00:26:56]: Para mí es darle visibilidad que lo que no sabemos.

**Ivo Kalaizic** [00:27:00]: Los proyectos como, y por otro lado, agregar el scope de lo que quieren ver, tipo, cómo lo quieren ver, no de cómo se hace el accounting, cómo se hace el accounting lo entendemos ya.

**Felipe Gutierrez Mosquera** [00:27:11]: Y es, no, está buenísimo, viste, Marisa nos pasó un mensaje de esto, que es, yo le pregunté literalmente eso, que le pregunte a la mina esta, ver qué es lo que quiere ver.

**Jordán Pinghelli** [00:27:30]: O sea, mientras, lo único que tenemos que definir es cómo queremos capturar la info de los proyectos para mañana, y de paso, si quisieras impactar esto, la información como la tenés en tu Excel hoy, que sería lo que nosotros podemos trasladar a la plataforma, ¿te sirve?

**Jordán Pinghelli** [00:27:45]: ¿O ves que impactaría de una forma diferente?

**Tomás Gómez** [00:27:50]: Algo que estaría bueno validar mañana, porque a ver, al final los dueños de las datas son ellos, es si ellos cuando nos compartan la data de...

**Tomás Gómez** [00:28:00]: Proyectos no van a pasar.

**Tomás Gómez** [00:28:01]: Por ejemplo, un número final con el contenedor es de 40 a 20.

**Tomás Gómez** [00:28:05]: Perfecto.

**Tomás Gómez** [00:28:05]: Este proyecto es uno para Francia.

**Tomás Gómez** [00:28:07]: Buenísimo.

**Tomás Gómez** [00:28:08]: Entonces vas a decir, llegamos 100% al KPI.

**Tomás Gómez** [00:28:11]: Perfecto.

**Tomás Gómez** [00:28:11]: O me vas a pasar cuánto se ahorró, un número redondo y ya, o me vas a pasar qué cantidad de contenedores que hicieron en este trayecto pasaron de 40 a 20.

**Tomás Gómez** [00:28:23]: ¿Está bien?

**Tomás Gómez** [00:28:24]: Es como, eso estaría bueno, Jeff, sabiéndolo.

**Tomás Gómez** [00:28:26]: ¿Qué granularidad de data nos vas a pasar con el tipo esto de los proyectos?

**Felipe Gutierrez Mosquera** [00:28:33]: Porque eso hay algo.

**Felipe Gutierrez Mosquera** [00:28:34]: Ya.

**Felipe Gutierrez Mosquera** [00:28:36]: Sí, pongámoslo acá mientras lo pensamos así.

**Felipe Gutierrez Mosquera** [00:28:38]: O sea, CAPEX, este es el bulk upload que tenemos hoy en día en la plataforma para los proyectos de manufacturing.

**Felipe Gutierrez Mosquera** [00:28:45]: Entonces, ¿estamos de acuerdo que CAPEX, o sea, CAPEX no tenemos porque no son proyectos de ellos?

**Felipe Gutierrez Mosquera** [00:28:52]: No, pero pueden llegar a requerir, si es interno, un cambio de transporte.

**Ivo Kalaizic** [00:29:03]: Ok, sí, tranquilo, andá.

**Felipe Gutierrez Mosquera** [00:29:31]: O sea, pensemos qué necesitamos saber de sus proyectos.

**Felipe Gutierrez Mosquera** [00:29:37]: Claro, para mí toda la info que vos ya pusiste ahí que necesitamos está perfecta.

**Jordán Pinghelli** [00:29:41]: Por ahí la podríamos agregar, pensando a futuro en el impacto, en dónde impacta.

**Jordán Pinghelli** [00:29:45]: Si tipo, impacta en distancias, impacta en pesos, impacta en destinos, no sé, algo así.

**Jordán Pinghelli** [00:29:53]: Después del cálculo que lo hagan ellos eventualmente, yo estoy de acuerdo.

**Jordán Pinghelli** [00:29:56]: Por ahí creo que lo pueden hacer, ya lo tienen.

**Felipe Gutierrez Mosquera** [00:30:00]: Eso está buenísimo y eso está acá en realidad, en impact, impact metric, que son las que te faltan, pero estas son las para sites de manufacturing, que no tienen ningún sentido, por ejemplo, City Water, o Co-Generation Natural Gas.

**Jordán Pinghelli** [00:30:24]: Y si ponemos directamente, impact en distance, fuel, o vehicle, y no sé cuál es la otra variable que me está faltando, destination, tipo distance, como kilómetros recorridos, o weight, o vehicle barra o fuel, y destination puede ser, pero bueno, creo, porque sería raro, o sea.

**Jordán Pinghelli** [00:31:00]: Solo por si están, pero se impacta en kilómetros.

**Jordán Pinghelli** [00:31:02]: Creo que con esas tres capturamos todo.

**Jordán Pinghelli** [00:31:05]: ¿Cómo era para repetir?

**Jordán Pinghelli** [00:31:07]: Sí, distance, tipo kilómetros, recorridos, weight, peso, y ahí capturamos todo lo que tenga que ver con que acoplaron más en un mismo lane o no sé, o cambiaron el packaging o hicieron algo para reducir el peso o lo que sea.

**Jordán Pinghelli** [00:31:24]: Y después lo otro sería que cambiaron el vehículo o el combustible.

**Felipe Gutierrez Mosquera** [00:31:33]: Bueno, y yo creo que con esto impactamos cualquiera de lo que estaba en el Excel.

**Jordán Pinghelli** [00:31:38]: Sí.

**Tomás Gómez** [00:31:39]: ¿No?

**Tomás Gómez** [00:31:40]: Sí, sí, porque después es básicamente fórmulas.

**Tomás Gómez** [00:31:46]: Claro.

**Tomás Gómez** [00:31:46]: eso ya si menos sacas el C2C.

**Tomás Gómez** [00:31:51]: A ver, otra cosa que también no hace falta pensarlo ya, es que este Bullcap Blood va a cambiar.

**Tomás Gómez** [00:31:59]: Vale.

**Tomás Gómez** [00:32:00]: CO2 a medida que vayamos dándonos cuenta de, o sea, sí o sí va a tener que cambiar.

**Tomás Gómez** [00:32:05]: Con esto no nos va a alcanzar.

**Felipe Gutierrez Mosquera** [00:32:07]: Olvídate, olvídate, esto va a cambiar sí o sí.

**Felipe Gutierrez Mosquera** [00:32:10]: No pretendo que esto sea como el final, pero para que esta María se vaya, viste, contenta de vacaciones y nosotros vamos a ir avanzando pidiéndole estas cosas.

**Felipe Gutierrez Mosquera** [00:32:20]: También, boludo, siento que esto es iterativo, viste, como que no lo vamos a tener listo desde el minuto uno, pero a medida que revisamos la información y la podemos ir metiendo en la plataforma y ahí vamos a nosotros a tener más claridad.

**Felipe Gutierrez Mosquera** [00:32:30]: Mañana es al mediodía, me parece.

**Felipe Gutierrez Mosquera** [00:32:37]: Sí, a las once y media.

**Felipe Gutierrez Mosquera** [00:32:41]: Terminemos de pensar esto, o sea, título del proyecto, esto, description, CAPEX.

**Felipe Gutierrez Mosquera** [00:32:50]: Ahí no precisan que me sumes.

**Tomás Gómez** [00:32:53]: Como quieras, si querés sumarte, sumate, si no, no te sumas.

**Felipe Gutierrez Mosquera** [00:32:56]: Mándanos si querés el invite.

**Tomás Gómez** [00:32:58]: Vi que Jordi está igual y vos.

**Tomás Gómez** [00:33:00]: Pero por eso, bueno, me sumo así, escucho un poco por lo menos.

**Felipe Gutierrez Mosquera** [00:33:04]: Porque no queda grabada, viste.

**Felipe Gutierrez Mosquera** [00:33:06]: Si querés sumarte, sumate, si no te pasamos el transcript de la grabación.

**Jordán Pinghelli** [00:33:12]: Y después estamos poniendo así del start date y cuánto tiempo esperamos que duren los beneficios, ponele.

**Felipe Gutierrez Mosquera** [00:33:22]: Sí, le pongo tipo CO2, equivalent impact, impact metric, que va a ser esta.

**Felipe Gutierrez Mosquera** [00:33:33]: ¿Ese impact de CO2 es total o es anual?

**Tomás Gómez** [00:33:40]: ¿Cómo pedimos?

**Felipe Gutierrez Mosquera** [00:33:42]: Una buena, por realidad esto es impact en métrica, o sea, esto no es como funciona ahora, en realidad es...

**Felipe Gutierrez Mosquera** [00:34:01]: Claro, esto en realidad no es así, esto es solamente impact y acá le tienen que poner, por ejemplo, si acá seleccionan distance, acá tienen que poner los kilómetros.

**Felipe Gutierrez Mosquera** [00:34:23]: Claro.

**Felipe Gutierrez Mosquera** [00:34:26]: De hecho esto por ejemplo así.

**Tomás Gómez** [00:34:33]: Algo que tenemos como objetivo nuestro también es modificar la parte de proyectos para que los usuarios puedan empezar a captar los sellos o lo primero que queremos atacar es tipo un bulk upload de 40 proyectos para hacerle la vida más fácil a ellos.

**Felipe Gutierrez Mosquera** [00:34:46]: Eh, no, o sea, primero hacer un bulk upload porque si no es un quilombo bárbaro cargar 40.000 proyectos y después que...

**Felipe Gutierrez Mosquera** [00:35:00]: Los carguen ellos, obvio.

**Felipe Gutierrez Mosquera** [00:35:03]: O sea, yo lo termino esto y se los mando.

**Felipe Gutierrez Mosquera** [00:35:20]: ¿Algo más que tengamos que poner acá?

**Felipe Gutierrez Mosquera** [00:35:22]: ¿Qué se les ocurra?

**Jordán Pinghelli** [00:35:24]: Responsable pusimos, o importa, o lo canaliza toda esta mina.

**Jordán Pinghelli** [00:35:27]: Sí, ahí está el Project Leader, a la derecha.

**Jordán Pinghelli** [00:35:41]: Creo que ahí está, hay algo en los de volumetric que pedimos normalmente que acá no esté, ¿eh?

**Jordán Pinghelli** [00:35:46]: Los de manufacturing.

**Jordán Pinghelli** [00:35:49]: Sí, en agua, o estoy pensando para comparar con los proyectos que solemos.

**Jordán Pinghelli** [00:35:53]: No, este es el mismo template, es el mismo template que se usa para eso.

**Felipe Gutierrez Mosquera** [00:35:57]: Ok, ok.

**Jordán Pinghelli** [00:36:00]: No se me ocurre otra cosa.

**Tomás Gómez** [00:36:02]: A mí no se me ocurre otra cosa por, o sea, por un tema de ignorancia, pero hoy de la noche me voy a sentar, después mandame el invite, porfa, Pipe, y de última paso y preguntas por el chat que tenemos para grabar algo.

**Felipe Gutierrez Mosquera** [00:36:16]: Ya te lo mandé, fíjate que, o sea, hay un montón de documentos, boludo, como que no, no reinventes la rueda, leete desde la carpeta esta, acá están todas las notas.

**Tomás Gómez** [00:36:31]: Transcripts and Notes, ok, estaba mirando otra.

**Felipe Gutierrez Mosquera** [00:36:35]: Esa que se llama Net Zero Carbon Logistics, pero por ejemplo, acá en el SMSP Transcript tengo varias notas mías que me sirvieron para entender la cuenta, viste, entender qué significa todo, cada cosa, cómo son los proyectos, pero esto es lo que ellos tienen hoy en día en los proyectos, y esto ya lo tenemos todos nosotros ahí.

**Felipe Gutierrez Mosquera** [00:36:55]: Podría ser el Percentage of Completion con el engrosalte.

**Felipe Gutierrez Mosquera** [00:36:59]: Yo...

**Tomás Gómez** [00:37:02]: Si quieren, me llevo a enfocarme un poquito más en la parte de la data cruda, para ver si se me ocurren algunas preguntas, o sea, ya ponele, nos dimos cuenta de que el formato de 20, 24, 20, 25, por lo menos lo que nos compartieron, cambia.

**Tomás Gómez** [00:37:19]: Entonces, tipo, cheo que...

**Felipe Gutierrez Mosquera** [00:37:49]: Y con eso se hace la base para lo que le vamos a pedir mañana.

**Felipe Gutierrez Mosquera** [00:37:53]: Si, Tommy, vos llegas a revisar, y te ves que hay algo que ya podemos ir avanzando, y pidiéndoselo mañana, se lo pedimos.

**Felipe Gutierrez Mosquera** [00:37:59]: Ahora, si no estamos...

**Felipe Gutierrez Mosquera** [00:38:00]: Seguros, yo prefiero no pedírselo y se lo pedimos más adelante, y mañana le pedí, como para que después no nos digan, che, pero pasamos esto al pedo, que viste, es algo que puede surgir.

**Tomás Gómez** [00:38:14]: Sí, o la típica de pedir algo que ya nos pasaron y había que buscarlo de otra forma, y así.

**Jordán Pinghelli** [00:38:20]: ¿Entramos solo en proyectos entonces o exploramos un poco la idea del cálculo?

**Felipe Gutierrez Mosquera** [00:38:26]: Mira, siento que acá estamos sólidos, acá no estamos tan sólidos, y honestamente todavía no revisamos la data que compartieron ellos, como que nos falta revisarlo.

**Tomás Gómez** [00:38:37]: Serviría, perdón que les, o sea, no creo llegar a tenerlo para mañana, les comparto muy rápido pantalla, denme un segundito, no sé si cargo en data, serviría tener algo tipo, no sé si así, pero por ahí más relacionado a, ¿sí?

**Tomás Gómez** [00:38:58]: Sí, sí, exacto cual fallo, decís.

**Felipe Gutierrez Mosquera** [00:39:00]: Para mí sí sirve eso, nada, la rego es mañana, o sea.

**Felipe Gutierrez Mosquera** [00:39:06]: Sí, no, estoy en esta la pija, la verdad.

**Felipe Gutierrez Mosquera** [00:39:09]: Por eso.

**Felipe Gutierrez Mosquera** [00:39:09]: Ok, bueno, nada, me sumo a escuchar y si se me ocurre algo de data entre hoy que reviso y mañana en la reunión se los paso y para Dale, anotemos ahí todas las preguntas en un doc y vamos primero con el file del pedido de datos y después vamos con preguntas.

**Felipe Gutierrez Mosquera** [00:39:29]: Ok, dale.

**Tomás Gómez** [00:39:31]: Vale.

**Tomás Gómez** [00:39:33]: Una cosa más y cerramos, para mí algo clave es tipo, si entré hoy mañana a las 9 de la mañana, decir tipo, che, de la reunión nos queremos llevar esto.

**Tomás Gómez** [00:39:45]: Porque siento que todavía estamos todos medios tipo, che, sí nos sirve, queremos saber esto, pero ninguno, o por lo menos yo no estoy seguro de tipo, qué vamos a a preguntar.

**Felipe Gutierrez Mosquera** [00:39:56]: O sea, el objetivo de la reunión es pasarle bien.

**Felipe Gutierrez Mosquera** [00:39:59]: O bien.

**Felipe Gutierrez Mosquera** [00:40:00]: O sea, la mina de se da dos semanas de vacaciones, ¿entendés?

**Felipe Gutierrez Mosquera** [00:40:03]: Dos semanas que no nos va a contestar y es la que bullera todo el proyecto.

**Felipe Gutierrez Mosquera** [00:40:05]: Entonces, ¿cómo hacemos para aprovechar al máximo esas dos semanas?

**Felipe Gutierrez Mosquera** [00:40:08]: Es mañana dándole el request de data con lo que sabemos hasta ahora, porque hay cosas que vamos a tener que pedir más adelante porque claramente no sabemos todavía.

**Felipe Gutierrez Mosquera** [00:40:18]: Entonces, tenemos que, de esa reunión nos tenemos que llevar el pedido de datos para María, sólido, y tratar de resolver las dudas que tengamos, que llegamos hasta, de lo que revisamos la data hasta mañana.

**Felipe Gutierrez Mosquera** [00:40:32]: Van a surgir más adelante, van a tener que pedir más cosas y, bueno, nada, lo que llegamos hasta mañana, resolvemos los mañana, lo que no, lo seguimos trabajando estas dos semanas y mientras nos llega la data de proyectos y eso ya lo tenemos y ya avanzamos y ahí.

**Tomás Gómez** [00:40:49]: ¿Las flacas salen el viernes de vacaciones?

**Tomás Gómez** [00:40:52]: No sé bien.

**Tomás Gómez** [00:40:54]: Porque no es lo mismo si mañana se tiene que poner a exportar cosas que si tienen que eso sí.

**Tomás Gómez** [00:41:00]: Se lo va a dejar a un subordinado de ella, para que nos pasen las cosas.

**Tomás Gómez** [00:41:06]: Bueno, dale, bárbaro.

**Felipe Gutierrez Mosquera** [00:41:08]: Muchachos, muchas gracias por todo, yo ahora después les paso por escrito.

**Felipe Gutierrez Mosquera** [00:41:12]: Dale.

**Felipe Gutierrez Mosquera** [00:41:12]: Dale, bye.

**Felipe Gutierrez Mosquera** [00:41:14]: Bueno, gracias.

**Felipe Gutierrez Mosquera** [00:41:15]: Chau, chau.
