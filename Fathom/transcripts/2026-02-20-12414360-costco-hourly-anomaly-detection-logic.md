# Costco hourly anomaly detection logic
**Date:** 2026-02-20T18:27:52Z
**URL:** https://fathom.video/calls/575580338
**Participants:** Mariano Soule (mariano.soule@waterplan.com), Federico Golberg (federico.golberg@waterplan.com), Ivo Kalaizic (ivo.kalaizic@waterplan.com)

---

**Ivo Kalaizic** [00:00:59]: Un segundo.

**Ivo Kalaizic** [00:01:01]: Otra vez.

**Ivo Kalaizic** [00:01:21]: Bueno, te vas a compartir.

**Ivo Kalaizic** [00:01:32]: ¿Viste que, no sé si recordás, tipo, breve contexto, ¿Viste, Cosco, vos estuviste tocando las alertas, todo el sistema de alertas, pero básicamente...

**Ivo Kalaizic** [00:01:40]: El de anomalías.

**Ivo Kalaizic** [00:01:41]: El de anomalías, exactamente.

**Ivo Kalaizic** [00:01:44]: Lo que nosotros buscamos es como la anomalía a nivel...

**Ivo Kalaizic** [00:01:50]: ¿Te acordás el flujo, cómo funciona?

**Ivo Kalaizic** [00:01:53]: Creo que acá también lo tengo explicado.

**Ivo Kalaizic** [00:01:55]: O mirá, voy de vuelta.

**Ivo Kalaizic** [00:01:57]: Nosotros estamos integrados con ellos, recibimos información...

**Ivo Kalaizic** [00:02:00]: De distintos tipos de resoluciones, pero nos estamos quedando con la resolución, para lo que es anomalías, con la resolución de un minuto, ¿ok?

**Ivo Kalaizic** [00:02:09]: ¿Resolución de un minuto?

**Mariano Soulé** [00:02:11]: ¿Qué llama resolución de un minuto?

**Mariano Soulé** [00:02:13]: Perdón.

**Ivo Kalaizic** [00:02:14]: No, perfecto.

**Ivo Kalaizic** [00:02:15]: A nosotros nos mandan, nosotros estamos integrados con ellos y recibimos como paquete de datos, creo que el protocolo es el HTTP, no sé, o HPS, no sé cómo es.

**Ivo Kalaizic** [00:02:26]: Pero en fin, tipo, hay como distintas líneas con distintos datos, hay un dato, tipo, viene dato con la resolución minutal, tipo, en minuto de las 3.02, con una resolución de un minuto, se consumió tanto volumen de agua.

**Ivo Kalaizic** [00:02:44]: Después también vienen algunos datos medio falopa, tipo, una resolución de, no sé, 0.37, ponerle, y eso no lo estamos considerando.

**Ivo Kalaizic** [00:02:51]: Y también nos viene una resolución que es igual a 60, que es básicamente un acumulado del año anterior.

**Ivo Kalaizic** [00:02:57]: Eso tipo, ¿cómo recibimos los datos?

**Ivo Kalaizic** [00:02:59]: ¿Qué es importante de ahí?

**Ivo Kalaizic** [00:03:59]: Entonces, empezamos a pensar, bueno, ¿cuál puede ser una buena manera de poder lograr eso?

**Ivo Kalaizic** [00:04:06]: Y dijimos, bueno, esto sería como un sistema de anomalías horario, aparte del minutal.

**Ivo Kalaizic** [00:04:12]: ¿Qué es lo que tiene que hacer el sistema horario?

**Ivo Kalaizic** [00:04:15]: Básicamente la misma metodología de cálculo, en la cual miramos los últimos 14 días, miramos cuánto se consumió en toda la hora, y comparamos si el consumo a hora cerrada hace sentido contra lo que venía sucediendo antes.

**Mariano Soulé** [00:04:29]: O sea, SPD, tranqui, o sea, agarramos, vos decís agarrar el consumo de los últimos 14 días, sacar el promedio por hora, y si...

**Ivo Kalaizic** [00:04:41]: ¿La mediana?

**Mariano Soulé** [00:04:43]: La mediana, la mediana, y si eso supera, si el actual supera eso, tirar ahí una alerta, decís.

**Ivo Kalaizic** [00:04:54]: Sí, por ahora dejémoslo así.

**Ivo Kalaizic** [00:04:56]: Así, así, high level.

**Ivo Kalaizic** [00:04:57]: Sí, entonces, te voy a...

**Ivo Kalaizic** [00:04:59]: ¡Suscríbete!

**Ivo Kalaizic** [00:04:59]: Gracias.

**Ivo Kalaizic** [00:05:00]: Bueno, perfecto.

**Ivo Kalaizic** [00:05:00]: Había que validar esto con el cliente.

**Ivo Kalaizic** [00:05:02]: Entonces, yo armé una query en SQL que básicamente representa este caso.

**Ivo Kalaizic** [00:05:09]: Te la voy a compartir.

**Ivo Kalaizic** [00:05:11]: Creo que estaba en esta.

**Ivo Kalaizic** [00:05:18]: Que básicamente está adjunta en el documento.

**Ivo Kalaizic** [00:05:22]: Básicamente agarra y hace todo en una misma query.

**Ivo Kalaizic** [00:05:25]: Entonces crea las tablas, busca las tablas y todo.

**Ivo Kalaizic** [00:05:27]: Pero lo que me importa mostrarte a vos es cómo hace la agregación horaria, la definición de CAD.

**Ivo Kalaizic** [00:05:35]: Esto lo podemos mirar en detalle.

**Ivo Kalaizic** [00:05:38]: Y hace como la misma metodología que está actualmente aplicado para el sistema minutal, pero para el acumulado horario que acumulamos previamente.

**Ivo Kalaizic** [00:05:49]: ¿Me seguiste?

**Ivo Kalaizic** [00:05:50]: Sí.

**Ivo Kalaizic** [00:05:51]: Bien.

**Ivo Kalaizic** [00:05:52]: En esta query, tipo, está hecho lo que, básicamente lo que hay que hacer.

**Ivo Kalaizic** [00:05:56]: La única diferencia es que si esto, tipo, nada, busca las tablas.

**Ivo Kalaizic** [00:06:00]: Tablas, crea como tablas, la de acá en la query y demás.

**Ivo Kalaizic** [00:06:05]: Ok, entonces, esto es tipo, ¿cuál es el siguiente caso?

**Ivo Kalaizic** [00:06:10]: Por un lado tenemos el sistema que tenemos ahora implementado, que está funcionando ok, y ahora tenemos como una segunda manera de definir criterios de normalidad, ¿no?

**Ivo Kalaizic** [00:06:20]: Entendiendo qué pasa a nivel horario.

**Ivo Kalaizic** [00:06:24]: Ahora, acá arrancan como las condiciones más de lógica de, no sé si de negocio o lógica de tipo, si yo alerto, si yo te alerto porque I-37 tuviste una normalidad de consumo, a mí, no sé si me hace sentido darte una alerta al final de la hora, también, ¿entendés?

**Ivo Kalaizic** [00:06:44]: Tipo, yo no te quiero sobrealertar.

**Ivo Kalaizic** [00:06:47]: ¿Esa es, se entendió el motivo?

**Ivo Kalaizic** [00:06:49]: Sí, sí, sí, sí, sí.

**Ivo Kalaizic** [00:06:52]: Esas condiciones, están bajadas esos requerimientos, y yo estuve como pimponeando acá.

**Ivo Kalaizic** [00:07:00]: Lo adjunté al coso de la reunión, a la descripción de la reunión, y mismo también lo mandé por el chat, pero abrí como un milestone, y acá un poco, justo esto, medio no sé, díganme si ven ustedes esto bien, si no se los muestro en...

**Ivo Kalaizic** [00:07:16]: Pero acá lo que estoy comparando es tipo, los dos flujos, ¿no?

**Ivo Kalaizic** [00:07:20]: Por un lado tenemos un flujo actual, es tipo básicamente todas las cosas que suceden en el sistema, y el nuevo flujo, básicamente lo que requeriría es tipo, por un lado también, hacer el cálculo horario y la detección de anomalías, que yo lo denomina como de pérdidas, en vez de picos de consumo, y en función de eso, el criterio de decisión para enviar o no enviar un correo.

**Ivo Kalaizic** [00:07:55]: Frename si me decís tipo, che, esto está re falopa o no, ¿eh?

**Ivo Kalaizic** [00:07:58]: Sí, sí, sí.

**Ivo Kalaizic** [00:08:00]: También me decís, che, pará, y otra cosa que yo quiero de esta reunión llevarme es, tipo, yo quiero entender, tipo, si esto es fácil de hacer, así que decís, che, boludo, voy a tener que meterle, tipo, días a esto, porque sería otro tema y, bueno, vemos cuándo lo metemos, considerando que vos te vas, ¿no?

**Mariano Soulé** [00:08:16]: Sí, yo no creo que lleve tanto hacerlo, digamos, sinceramente, porque ya la estructura de todo lo que tenemos que hacer está hecho, la verdad, hay que cambiar algunos cálculos, hay que cambiar los cálculos, básicamente, o adherir, o agregar.

**Ivo Kalaizic** [00:08:30]: Lo que hay que hacer es hacer lo mismo que se está haciendo ahora, pero a nivel horario, como agregar esa segunda lógica de cálculo, y para mí la parte más compleja es, que tal vez me decís que no es compleja, es, el criterio para el cooldown, que básicamente el cooldown es, tipo, si yo te envío una alerta.

**Ivo Kalaizic** [00:08:53]: Sí, un tiempo no te mando nada.

**Mariano Soulé** [00:08:55]: No te mando nada de la hora esa y demás, ¿entendés?

**Ivo Kalaizic** [00:08:58]: Esa parte es como la, tal vez.

**Ivo Kalaizic** [00:09:01]: Bueno, hablé con Gemini y básicamente decía, tipo, y tenés que, tipo, si mandás un mensaje, si mandás una alerta, como dejarlo logueado para después buscar ese log y eso no está en las tablas actuales, entonces, como que tal vez ahí hay una complejidad.

**Ivo Kalaizic** [00:09:19]: Ok.

**Ivo Kalaizic** [00:09:20]: Ok.

**Ivo Kalaizic** [00:09:22]: Y algo que me parecería que estaría re bueno, que es lo menos importante de todo, es que nosotros hoy tenemos un template en el email que está en un Apps Script, que básicamente, tipo, como que tiene los patrones, los campos que son, creo que es valor, horario, horario en el cual se detectó una anomalía y medida.

**Ivo Kalaizic** [00:09:43]: Pero, entonces, yo lo que pensé que tal vez estaría piola, es agregar un campo más, en el cual, en ese mismo correo, se detalle si es un pico de consumo, tipo una anomalía por un pico de consumo, o si es una fuga, básicamente una pérdida, como para poder...

**Ivo Kalaizic** [00:10:00]: Les dar ese, también ese criterio.

**Ivo Kalaizic** [00:10:03]: Ok.

**Ivo Kalaizic** [00:10:07]: Bueno, acá está el milestone, y acá están como los test tickets que, si querés podemos verlos, pero que, por los que fui armando con el geminale.

**Ivo Kalaizic** [00:10:18]: ¿Hasta acá tengo alguna pregunta o cosa?

**Ivo Kalaizic** [00:10:22]: O sea, tengo...

**Ivo Kalaizic** [00:10:25]: No, vos vas bien, vos vas bien.

**Mariano Soulé** [00:10:26]: Yo lo que estoy pensando es que hay algunas cosas que la tengo que revisar para ver cómo es que funcionan, para ver de qué manera integramos esto.

**Mariano Soulé** [00:10:37]: No lo tengo tan presente.

**Mariano Soulé** [00:10:39]: Estuve trabajando, o sea, trabajé en esto, pero no lo tengo tan claro.

**Mariano Soulé** [00:10:43]: Pero vamos bien, vamos bien, vamos bien.

**Mariano Soulé** [00:10:48]: Vos no te preocupes, vos seguís como tirando y yo después por ahí, copado que estás grabando, después conecto los puntos, digamos, un poco en mi cabeza.

**Mariano Soulé** [00:10:57]: Pero no estoy tratando de entender exactamente...

**Federico Golberg** [00:12:00]: O la dimensión de cuánto puedes llegar a tomar y para eso tienes que entenderlo, porque si no lo entiendes, siempre te pregunto, ¿cuánto tomas?

**Federico Golberg** [00:12:07]: No tiene sentido que me digas, si no entendés realmente bien qué es lo que puede pasar.

**Federico Golberg** [00:12:11]: Sí, eso es verdad.

**Mariano Soulé** [00:12:12]: Yo tiendo a decir que todo se puede hacer y que lo hacemos y que no es mucho drama, pero por ahí mejor lo puedo ver cada ticket en detalle y tratar de entender un poco, ver un poco de código, eso me ayudaría a entender también.

**Mariano Soulé** [00:12:28]: Pero vamos bien, vamos bien.

**Mariano Soulé** [00:12:31]: Lo que yo estoy pensando, esto tiene, la semana, o sea, ustedes querrían que yo esto agarre la semana que viene, o sea, lo primero que agarre, quieren que lo vea hoy y para la semana que viene tener una definición, ¿qué esperan?

**Mariano Soulé** [00:12:48]: Yo la semana que viene me voy, pero la semana que viene me voy una semana y después vuelvo y todo sigue igual, digamos.

**Federico Golberg** [00:12:53]: Sí, sí, sí, olvídate, por eso te digo, o sea, yo lo que te diría es si podés, ya son más tarde.

**Federico Golberg** [00:13:00]: Ya es un poco, si querés hoy revisarlo, ¿viste?

**Federico Golberg** [00:13:04]: Y con eso tenés un estimativo de tiempo y en base a eso después vemos a nivel cuándo los ponemos.

**Federico Golberg** [00:13:09]: Pero lo más importante es eso, poder entender tipo, que los revises tranquilo, bien, y que sabiendo como siempre todo lo que pasa constantemente, y más que salgo de encima que no es tan fácil hacerle QA, porque no es implante.

**Federico Golberg** [00:13:19]: productivo.

**Ivo Kalaizic** [00:13:20]: Sí.

**Federico Golberg** [00:13:22]: ¿Cómo, cómo?

**Federico Golberg** [00:13:23]: Esto no está en plataforma.

**Federico Golberg** [00:13:25]: No, está bien.

**Federico Golberg** [00:13:26]: Entonces hacerle QA es un poco más complejo, ¿viste?

**Federico Golberg** [00:13:28]: O sea, es con el OK.

**Ivo Kalaizic** [00:13:30]: No, o lo que es complejo es que, tipo, necesitas que te llegue el input de la data.

**Ivo Kalaizic** [00:13:39]: Tal vez podemos, tal vez podemos ser el QA como retrospectivo, tipo, con datos anteriores, ¿no?

**Ivo Kalaizic** [00:13:45]: Tipo.

**Ivo Kalaizic** [00:13:45]: Data vieja.

**Ivo Kalaizic** [00:13:46]: ¿Qué hubiera sucedido en los últimos 20 días si teníamos esta metodología activa?

**Ivo Kalaizic** [00:13:52]: O yo eso, o sea, yo justamente lo que hice con el cliente fue, con la query esta tiré los resultados y los mostré.

**Ivo Kalaizic** [00:13:59]: está?

**Ivo Kalaizic** [00:13:59]: Sí.

**Ivo Kalaizic** [00:13:59]: Y...

**Ivo Kalaizic** [00:14:00]: En un documento, y le dije, le abrí el dashboard, te cuento un poco más el por qué sale este dolor.

**Ivo Kalaizic** [00:14:08]: Nosotros tenemos hoy un dashboard en Waterplan con ella, con la integración de Mark Meadows.

**Ivo Kalaizic** [00:14:12]: Básicamente lo que muestra ese dashboard, a nivel hora y día, cuánta agua se consumió.

**Ivo Kalaizic** [00:14:17]: Entonces ellos ven que tal vez a la 3 de la tarde se consumió un montón de agua, pero no se dispara una alerta por eso.

**Ivo Kalaizic** [00:14:24]: Porque es una pérdida, no hay ninguna anomalía, ningún pico de consumo, es tipo un flujo sostenido alto.

**Ivo Kalaizic** [00:14:31]: Entonces ellos me dicen, tipo, che, yo quiero ser alertado si tengo un rojo en este tablero.

**Mariano Soulé** [00:14:36]: Claro, pero no ser un pico específico de un, así, como un, de unos pocos minutos no te salen en alerta, es decir, porque ya empieza a ser normalidad.

**Ivo Kalaizic** [00:14:49]: No, lo que pasa es que durante toda esa hora hay un flujo sostenido, pero es inferior que el umbral como para que se triguere una alerta.

**Ivo Kalaizic** [00:15:00]: en la forma en que estamos calculándolo hoy en día.

**Mariano Soulé** [00:15:01]: Exacto, exacto.

**Ivo Kalaizic** [00:15:03]: Ok.

**Ivo Kalaizic** [00:15:04]: Entonces, tipo, eso es como, tenés tu dolor, yo con el script este, lo que armé es, tipo, el resultado, básicamente, levanta los puntos rojos de, de, del dashboard, básicamente.

**Ivo Kalaizic** [00:15:18]: Entonces, los chavones te las llegaron, decían, tipo, quiero esto, justamente.

**Ivo Kalaizic** [00:15:21]: Esto necesito.

**Ivo Kalaizic** [00:15:22]: Aparte, aparte de lo de las anomalías, que está buenísimo lo que hacemos, porque, tipo, si hay un pico, un pico realmente rojo, y con esto, es que, tipo, justamente, tipo, este gráfico es lindo, pero es, es real, tipo, si nosotros logramos tener las dos cosas atadas, tipo, cubrimos tanto los picos, los picos, los picos, como las pérdidas.

**Mariano Soulé** [00:15:43]: Claro.

**Mariano Soulé** [00:15:47]: La data esta, Cosco, o no tiene, ¿qué utiliza para enviarnos?

**Mariano Soulé** [00:15:54]: Utiliza, entonces, un protocolo HTTP que nos manda la data, nos mandan un JSON cada hora.

**Mariano Soulé** [00:16:00]: Yo esto no lo sabía.

**Ivo Kalaizic** [00:16:01]: Mirá, acá está, en este proyecto creo que es, acá hay un Notion, si querés, acá, bueno, acá lo dice también, Lettinggest on a Cloud Run Service, esto es lo que corre, que se triggerá cada 3 minutos, conexo a Costco SFTP Server, que nos mandan un CSV, que dice Data and Uploading One Minute, esto.

**Ivo Kalaizic** [00:16:24]: ¿Quién hizo esta integración?

**Ivo Kalaizic** [00:16:25]: La hizo Tomi Amaro, en su momento, y la chusmeó mucho Jero.

**Ivo Kalaizic** [00:16:32]: Y te mandé el link al Notion, que espero, no sé si estás invitado, lo hago público esto, pero acá, en este Notion, tenés que mirar la B2, básicamente, que fue como la última actualizada, y acá también hay bastante datita del proceso, básicamente.

**Ivo Kalaizic** [00:16:55]: No, esto, pero bueno.

**Mariano Soulé** [00:16:59]: Ok.

**Ivo Kalaizic** [00:18:00]: Aparte de lo actual, armar el criterio de decisión para cuándo se dispara o no la alerta y actualizar el correo, que es lo menos importante, pero que estaría re piola, que es tipo, si es de anomalía, se, está el texto que tenés que poner, description, anomalía, y si es, perdón, pico, y si es por pérdida, diga, tipo, hubo una pérdida, básicamente.

**Ivo Kalaizic** [00:18:23]: Pero en el mismo HTML, nada más.

**Ivo Kalaizic** [00:18:25]: Claro.

**Mariano Soulé** [00:18:27]: No, vamos bien, vamos bien.

**Mariano Soulé** [00:18:29]: Déjenme revisarlo, entender los detalles, entender el flujo.

**Mariano Soulé** [00:18:33]: En función de eso puedo entender la dificultad y darle un poco de comprensión de qué es lo que me parece que podemos hacer con esto.

**Mariano Soulé** [00:18:43]: Pero vamos bien.

**Mariano Soulé** [00:18:45]: Si necesito algo más, igual, más información, creo que ahí ya estuve viendo el ticket y está bastante completo, así que no creo que necesite nada, pero por ahí te consulto alguna cosita que no puedo, que no llego a entender.

**Mariano Soulé** [00:18:55]: Dale.

**Mariano Soulé** [00:18:56]: Le voy a pedir un rato para poder entenderlo, pero...

**Mariano Soulé** [00:18:59]: rato poder entenderlo.

**Federico Golberg** [00:19:00]: Más que nada es eso, o sea, es entenderlo y después cuando entendemos bien, tipo, vemos cuándo podemos meterlo.

**Federico Golberg** [00:19:07]: Vale.

**Ivo Kalaizic** [00:19:08]: Te mando el recording, si querés.

**Mariano Soulé** [00:19:11]: Mándamelo, sí, viene bien, ahí con la, sobre todo la explicación que me diste al principio, porque hay un punto que se me escapó, pero vamos bien.

**Ivo Kalaizic** [00:19:21]: El único punto que, si querés, lo podemos revisar rápido, es que hay otro, un tema que hay considerar, que al principio me daba mal en las queries, que lo vas a ver en la query, para mí vale la pena que mires el tipo lo de SQL.

**Ivo Kalaizic** [00:19:38]: ¿Qué es lo siguiente, también?

**Ivo Kalaizic** [00:19:43]: Si yo, imagínate este caso, ¿no?

**Ivo Kalaizic** [00:19:46]: A las 3 de la mañana.

**Ivo Kalaizic** [00:19:48]: A las 3 de la mañana, para un medidor, no hay consumo, ¿no?

**Ivo Kalaizic** [00:19:52]: Porque es un supermercado, ¿te acordás?

**Ivo Kalaizic** [00:19:54]: Estamos hablando de un supermercado.

**Ivo Kalaizic** [00:19:55]: Un supermercado que tiene panadería, consume agua, ni idea, pero tipo un supermercado.

**Ivo Kalaizic** [00:20:05]: Y un día a las 3 de la mañana abren una canilla, porque se quedó a dormir un del de seguridad y va al baño y tira la cadena.

**Ivo Kalaizic** [00:20:14]: Yo no quiero que ahí se mande una anomalía.

**Ivo Kalaizic** [00:20:17]: Y hay que, entonces, ¿por qué?

**Ivo Kalaizic** [00:20:19]: ¿Y por qué se mandaría una anomalía?

**Ivo Kalaizic** [00:20:20]: Porque si a las 3 de la mañana siempre me dice cero, cero, cero, cero, si un día dice cinco, es como que sería una anomalía para el sistema, ¿entendés?

**Ivo Kalaizic** [00:20:30]: Entonces, ¿me se viste?

**Ivo Kalaizic** [00:20:32]: Entonces, es por eso que vas a ver en la query, y lo dicen los tickets, que también hay un criterio como para que, como mínimo, tiene que haber un volumen determinado, ¿entendés?

**Ivo Kalaizic** [00:20:44]: Ese volumen determinado está calculado, como que cuando lo hice la query lo fui también ahí pingponiendo como en Gemini, pero, te lo digo, ¿dónde carajo está esto?

**Ivo Kalaizic** [00:21:01]: Okay, dynamic standard deviation floor, when calculating the baseline using the 14-day history, calculate the average active consumption per meter, the standard deviation floor must be, y acá dice, como que agarra, el average horario, el volumen, esto lo calcula antes, y lo multiplica por un 10%, entonces yo te digo, que como mínimo sea, hacha un 10%, como mínimo no, si la acumulada de la hora es menor que el 10% average, no se dispara, ¿se entiende?

**Ivo Kalaizic** [00:21:49]: Después cuando lo leas lo vas entender mejor seguro, pero es como que es algo que también hay que tener en cuenta.

**Mariano Soulé** [00:21:56]: Sí, o sea, el máximo tiene que ser los 50 litros o lo otro, decís.

**Mariano Soulé** [00:22:00]: O el 10% del average de la hora.

**Mariano Soulé** [00:22:04]: Exacto.

**Ivo Kalaizic** [00:22:06]: Ok.

**Mariano Soulé** [00:22:07]: Exacto.

**Ivo Kalaizic** [00:22:09]: Eso es lo que, como el máximo no, el máximo para que se, el mínimo para que se dispare una anomalía, ¿entendés?

**Ivo Kalaizic** [00:22:18]: Y con eso mitigás el caso del chabón que va y tira la cadena.

**Ivo Kalaizic** [00:22:22]: Tipo, si tira la cadena no importa que haya un poco de consumo a las 3 de la mañana.

**Ivo Kalaizic** [00:22:25]: Ahora, si en que toda la hora, tipo, hubo bastante consumo, bueno, ahí sí lo quiero disparar.

**Ivo Kalaizic** [00:22:31]: Ok.

**Ivo Kalaizic** [00:22:32]: Eso es lo que busca esta condición.

**Ivo Kalaizic** [00:22:35]: Ok.

**Ivo Kalaizic** [00:22:37]: Ok.

**Mariano Soulé** [00:22:38]: Y eso, eso va a estar seteado así para, o sea, para toda la, esto, esto, ¿cómo conecta esto con las demás empresas, con los demás usuarios, Fede?

**Mariano Soulé** [00:22:49]: No, ese es el tema.

**Federico Golberg** [00:22:50]: No conectar, cero.

**Federico Golberg** [00:22:52]: Por eso es que...

**Ivo Kalaizic** [00:22:54]: O sea, porque ninguno tiene Smart Meters integrados.

**Ivo Kalaizic** [00:22:57]: No, o sea, es sobre eso.

**Federico Golberg** [00:22:58]: Fue un proceso que se hizo en su momento recontra...

**Ivo Kalaizic** [00:24:00]: Entonces, esto es lo que viene a hacer que les represente lo que ellos quieren ver.

**Federico Golberg** [00:24:05]: Sí, por eso digo, entonces, como al principio del curso que tenemos que hacer es, o sea, venimos haciendo, es una iniciativa más, y priorizar de nuevo la iniciativa.

**Federico Golberg** [00:24:14]: Porque una cosa es, tipo, che, una vez, y hacer un debugging, el tema es, ¿qué es debugging y qué es tipo de hardware?

**Federico Golberg** [00:24:20]: Y qué es una mejora.

**Federico Golberg** [00:24:21]: Lo que no podemos ir haciendo a largo plazo es dejarlo así.

**Federico Golberg** [00:24:25]: Lo que, si decidimos que hay que priorizarlo, hay que pasar una tool.

**Federico Golberg** [00:24:27]: Esto, digo, no podemos dejarlo por fuera de la plataforma sin QA, porque, tipo, mañana, tipo, esto, lo mejoramos.

**Federico Golberg** [00:24:34]: No podemos parar probando con nada del cliente, viste, con nada vieja, tipo, eso está muy mal.

**Federico Golberg** [00:24:38]: Es como que, es muy riesgoso, viste, tipo, si hacemos un cambio que está mal y el cliente lo ve, es un problemón, nosotros casi no podemos testearlo, como que, lo que tenemos que hacer esto es, si lo queremos hacer bien, hacer un entorno de QA, hacer la plataforma, digo, no puedo hacerlo manteniendo por fuera, si le queremos meter recursos.

**Federico Golberg** [00:24:52]: Si lo queremos dejar así, no pasa nada, pero si le queremos meter recursos, hay que entrar en la plataforma.

**Ivo Kalaizic** [00:24:56]: Bueno, bien.

**Federico Golberg** [00:24:59]: Pero, bueno.

**Federico Golberg** [00:25:00]: Pero de todas formas igual vamos a hacerlo, el tema es cuando, viste, justo por ahí van a ser vacaciones esa semana, entonces hay que ver si es semana que viene, que ya están los tickets asignados, y si no la otra lo hacemos, esto olvídate, esto lo vamos a arreglar si o si.

**Federico Golberg** [00:25:12]: A lo que voy es pensar más en un largo plazo que hacemos.

**Federico Golberg** [00:25:15]: Vale.

**Mariano Soulé** [00:25:19]: Yo estoy pensando...

**Mariano Soulé** [00:25:23]: No, bueno, dejá verlo, la semana que viene lo veo difícil igual, estoy pensando, porque también...

**Mariano Soulé** [00:25:30]: Tengo miedo de entender algo, apurarme y después encontrarme con cosas, digamos.

**Mariano Soulé** [00:25:35]: Viste que a veces...

**Mariano Soulé** [00:25:36]: Quiero...

**Mariano Soulé** [00:25:37]: Déjenmelo revisar, lo voy hablar con Marco también, que él tiene bien el...

**Mariano Soulé** [00:25:41]: Conoce bien la feature y me puede quizás dar alguna...

**Mariano Soulé** [00:25:46]: Algún edge que yo no esté viendo, algo, y demás.

**Mariano Soulé** [00:25:51]: Y quiero también ver cómo funciona ahora Cosco, qué es lo que tiene también, porque no tengo ni idea, digamos.

**Mariano Soulé** [00:25:57]: Qué funcionalidades tiene, cómo funciona.

**Mariano Soulé** [00:26:00]: ¿De dónde viene?

**Mariano Soulé** [00:26:00]: ¿Cómo vienen los JSON?

**Mariano Soulé** [00:26:02]: ¿Cada cuánto?

**Mariano Soulé** [00:26:03]: No tengo ni idea, no sabían que existía todo eso, así que para ponerlo un poco en contexto, pero nada, vamos a darle, no hay problema, yo no tengo drama, yo agarro lo que me digan, así que eso, olvídense.

**Mariano Soulé** [00:26:16]: Así que lo voy a revisar un poco y después, nada, qué cosa te hablo a Ivo, y te consulto y me saco cualquier duda y ¿eh?

**Mariano Soulé** [00:26:24]: Revísatelo, bueno.

**Mariano Soulé** [00:26:26]: Estamos.

**Federico Golberg** [00:26:26]: Vamos, que si querés, Ivo, que nos vemos un toque y vemos bien cómo lo, cómo lo hacemos, pero muy gracias, Mariano.

**Federico Golberg** [00:26:33]: Dale, gracias, chicos.

**Federico Golberg** [00:26:34]: Un beso.

**Federico Golberg** [00:26:36]: Chau.

**Federico Golberg** [00:26:36]: Chau, Mariano.

**Federico Golberg** [00:26:37]: ¿Querés sacar el laute de Iker?

**Federico Golberg** [00:26:39]: Sí.
