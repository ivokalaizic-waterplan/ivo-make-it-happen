# True Cost of Water Calculator - Design refi
**Date:** 2026-05-29T13:42:32Z
**URL:** https://fathom.video/calls/691118764
**Participants:** Sofía Agudelo (sofia.agudelo@waterplan.com), María Berrocal (maria.berrocal@waterplan.com), Ivo Kalaizic (ivo.kalaizic@waterplan.com)

---

**Ivo Kalaizic** [00:00:00]: CDP, entonces para eso tuvimos una reunión ayer con Augusto, Tobías, Elena, que Elena es la jefa de Tobías y demás, y con eso como que empezamos a pensar como un action plan para poder lograr tener más uso de la plataforma.

**Ivo Kalaizic** [00:00:17]: Empezamos a hacerle preguntas a Elena, como bueno, ¿qué esperas vos que suceda?

**Ivo Kalaizic** [00:00:21]: ¿Qué acciones tienen que hacer los sitios?

**Ivo Kalaizic** [00:00:23]: ¿Y con qué frecuencia?

**Ivo Kalaizic** [00:00:25]: Como para que setear bien la expectativa de cuántas veces la gente va a entrar a la plataforma y que después no se queje de que la gente no va a entrar, pero si no tiene una acción puntual para hacer.

**Ivo Kalaizic** [00:00:35]: Por ejemplo, hoy Target Tracking tiene, tipo ellos se ven obligados a actualizar los proyectos en Integrum y demás, y una vez al año a presentar el, en realidad, lo que tienen que hacer mensualmente, a presentar el Gly Path, que sería como lo que nosotros le armamos, ¿viste?

**Ivo Kalaizic** [00:00:53]: Y hacer un trackeo como cómo vienen contra el GUR.

**Ivo Kalaizic** [00:00:56]: Con así el trackeo de cómo vienen contra el GUR, hoy lo que nosotros les damos

**Ivo Kalaizic** [00:00:59]: Moss, no les sirve del todo porque, ¿qué significaría que les sirva del todo?

**Ivo Kalaizic** [00:01:06]: Que no tengan que hacer ninguna matemática en un Excel file después de usar la data de la plataforma y hoy siguen haciendo Excels.

**Ivo Kalaizic** [00:01:14]: ¿Por qué?

**Ivo Kalaizic** [00:01:14]: Porque tienen que, por ejemplo, convertir el valor del WUR a un valor numérico y porque me dice, che, a mí no me sirve decirle, estamos a 003 WUR del objetivo, si no me sirve decirles, estamos a 50.000 metros cúbicos del objetivo.

**Ivo Kalaizic** [00:01:30]: Entonces, eso es un punto, luego por otro lado me dicen, no, y también nosotros medimos todo en plata.

**Ivo Kalaizic** [00:01:36]: Entonces, si ellos tienen 50.000 metros cúbicos y lo multiplican por el True Cost of Water, pueden sacar, por ejemplo, cuánta plata están lejos.

**Ivo Kalaizic** [00:01:44]: Y, por ejemplo, un sitio que pasó su target de WUR es un sitio que ahorró plata a la compañía.

**Ivo Kalaizic** [00:01:52]: ¿Ok?

**Ivo Kalaizic** [00:01:52]: Bueno.

**Ivo Kalaizic** [00:01:53]: Dentro de todo eso, Elena, cinco veces durante la reunión, mencionó el True Cost of Water.

**Ivo Kalaizic** [00:01:59]: Y...

**Ivo Kalaizic** [00:01:59]: ...ese

**Ivo Kalaizic** [00:02:00]: Next step de eso es, bueno, metamos el True Cost of Water en la plataforma.

**Ivo Kalaizic** [00:02:04]: Hoy, la plataforma en Target Tracking, tenemos la posibilidad de hacer un input manual del True Cost of Water.

**Ivo Kalaizic** [00:02:11]: Si me vengo a CCP, Target Tracking, está el True Cost of Water, que el True Cost of Water es un input que se puede hacer a nivel site acá.

**Ivo Kalaizic** [00:02:37]: Después hay una lógica de agrupación, que esto no va ahora, pero después tendría que investigar, que es cómo a nivel site se va a nivel site group y cómo a nivel site se va a nivel company, para hacer acá el cálculo del True Cost of Water, pero bueno, está out of copy esta conversación.

**Ivo Kalaizic** [00:02:52]: ¿Qué es lo que tenemos que lograr?

**Ivo Kalaizic** [00:02:54]: Bueno, que el usuario en la plataforma o que el sitio en la plataforma haga el cálculo.

**Ivo Kalaizic** [00:03:01]: Y que no sea más un input manual y darle la visibilidad a Elena y a Tobias de todo lo que le damos con el, de todas las capabilities que le damos con el GUR, con el GUR Calculator, de hacerlo con el TrueCostOfWater.

**Ivo Kalaizic** [00:03:15]: ¿Por qué?

**Ivo Kalaizic** [00:03:17]: El TrueCostOfWater, básicamente, es un Excel, que lo único que ve el usuario, te lo voy a mostrar de cero porque es lo que ve el usuario, yo tengo muchos casos ahí, lo que ve el usuario del sitio, cuando ingresa,

**Ivo Kalaizic** [00:04:01]: Es esto, cada sitio tiene su propio Excel, o hay 93 Excels que al fin de día o a fin de año Tobías recibe y él tiene que como copilar cada Excel, ¿ok?

**Ivo Kalaizic** [00:04:14]: Entonces, ¿cómo funciona?

**Ivo Kalaizic** [00:04:16]: La lógica detrás es más compleja, que está como también out of scope de, a través de la conversación esta de diseño, pero el objetivo, como sabemos, o como les dije, bueno, introduzcamos la Crucos of Water en Waterplan, haciéndolo de una forma simple, linda, como nosotros lo vamos a hacer.

**Ivo Kalaizic** [00:04:36]: ¿Cuál es el objetivo?

**Ivo Kalaizic** [00:04:37]: Básicamente calcular el costo real del agua.

**Ivo Kalaizic** [00:04:39]: Entonces, no sé si están como en contexto de esto, sino que voy como contándoles básicamente cómo funciona esto.

**Ivo Kalaizic** [00:04:45]: ¿Me dicen?

**Ivo Kalaizic** [00:04:46]: No las veo.

**Ivo Kalaizic** [00:04:48]: Keep going.

**Sofía Agudelo** [00:04:49]: Ok.

**Ivo Kalaizic** [00:04:51]: Entonces, básicamente esto, el usuario viene, hace un input de su sitio, que nosotros esto lo podemos resolver fácil.

**Ivo Kalaizic** [00:05:00]: Por si vivimos, se completa la plant name, el bottler name, que siempre es CDP.

**Ivo Kalaizic** [00:05:06]: ¿Por qué el bottler name y CDP?

**Ivo Kalaizic** [00:05:09]: Siempre porque nosotros vamos a CDP hoy.

**Ivo Kalaizic** [00:05:12]: Pero esto es una bajada de Coca-Cola Company System.

**Ivo Kalaizic** [00:05:19]: Entonces, después viene el operational cost data, que básicamente lo que nosotros intentamos acá calcular es básicamente el costo interno y el costo externo.

**Ivo Kalaizic** [00:05:28]: El usuario puede hacer un input de cuánto, básicamente, de las variables de water, entendiendo, private, municipal, ADER o ADER, y acá él va completando el full year volume, el full cost de esto.

**Ivo Kalaizic** [00:05:46]: Y básicamente acá hacemos, esa es una división muy simple, que te dice, si vos consumiste 3 millones de litros y gastaste 3 millones de euros, el costo es de 1 euro por litro.

**Ivo Kalaizic** [00:05:58]: Por metro cúbico.

**María Berrocal Olmos** [00:06:00]: ¿Eso sería el costo municipal?

**María Berrocal Olmos** [00:06:02]: Esto sería el costo municipal.

**Ivo Kalaizic** [00:06:04]: Ahora, ¿qué pasa?

**Ivo Kalaizic** [00:06:06]: También tenés costo de una web privada, podría agregarse acá.

**Ivo Kalaizic** [00:06:11]: Entonces, por ejemplo, yo gasté un millón, consumí 15.000 litros y pagué 5.000 euros.

**Ivo Kalaizic** [00:06:17]: Entonces me dice, ok, si vos gastaste esto, el costo, la división simple es esto.

**Ivo Kalaizic** [00:06:23]: Acá tenés...

**Ivo Kalaizic** [00:06:24]: Perdón, ¿te puedo ir interrumpiendo?

**Ivo Kalaizic** [00:06:26]: Obvio, dale.

**Ivo Kalaizic** [00:06:27]: ¿Esa data la tiene el site?

**Ivo Kalaizic** [00:06:29]: Esta data la tiene el site.

**Ivo Kalaizic** [00:06:31]: O sea, eso sí, pero no...

**María Berrocal Olmos** [00:06:34]: Ok, la tiene el site.

**María Berrocal Olmos** [00:06:36]: ¿Y un site puede tener private well y municipal?

**María Berrocal Olmos** [00:06:40]: Sí.

**María Berrocal Olmos** [00:06:41]: ¿O puedes tener solo municipal cost de ir a...?

**María Berrocal Olmos** [00:06:45]: O sea...

**María Berrocal Olmos** [00:06:46]: No, no, puede tener estas dos, y hecho puede tener más.

**Ivo Kalaizic** [00:06:51]: Por ejemplo, te digo, en México...

**Ivo Kalaizic** [00:06:53]: Eso tiene others.

**Ivo Kalaizic** [00:06:54]: En México, por ejemplo, tenés las pipas de agua, ¿viste?

**Ivo Kalaizic** [00:06:58]: Sí, que son tipo los camiones de agua que se entregan.

**Ivo Kalaizic** [00:07:03]: Entonces, por ejemplo, acá podría ser un other.

**Ivo Kalaizic** [00:07:06]: Y de hecho, el Excel, todas las preguntas que tengas igual a ser me las mire y que yo últimamente vuelvo a Tobias y se los pregunto.

**Ivo Kalaizic** [00:07:12]: Pero el Excel acá le da como hasta nueve opciones para que el usuario como que imputee.

**Ivo Kalaizic** [00:07:18]: Entonces acá la primera pregunta que tengo, que no sé qué tan fundamental es tomar la definición ahora, es tipo, si hay la pena dejar como un other, como un, por ejemplo, Parga de Tuvely municipal, municipal sí o sí va a estar como, tipo, decime tu private weather y tu municipal weather, pero tal vez acá podemos dejar como blanco y que el usuario pueda como hacer su propio input de, acá puse pipas de agua, pues, en México, por cierto, algo.

**María Berrocal Olmos** [00:07:45]: Sí, o sea, podemos dejarlo en blanco, podemos dejar suggested, que ya sepamos que son más o menos como recurrentes en algunos sites, y una opción de other, porque efectivamente no tenemos ese other.

**María Berrocal Olmos** [00:08:00]: Y que lo inputen directamente.

**María Berrocal Olmos** [00:08:03]: Bien.

**María Berrocal Olmos** [00:08:04]: O sea, por ahora es solamente una división y una suma.

**María Berrocal Olmos** [00:08:08]: Sí.

**Ivo Kalaizic** [00:08:08]: Listo.

**Ivo Kalaizic** [00:08:09]: ¿Tienes que me ha preguntado a vos?

**Ivo Kalaizic** [00:08:10]: Sí, tengo una consulta.

**Sofía Agudelo** [00:08:13]: ¿Aquí el nivel de granularidad importa o no importa?

**Sofía Agudelo** [00:08:16]: Es decir, si por ejemplo hay municipality withdrawals y luego tenemos el, no sé, ground surface, bla, bla, bla, bla, El true cost of water en realidad tendríamos como un true de cada subtipo de agua o no, es un dato general.

**Sofía Agudelo** [00:08:33]: Y luego Giovanni contra el general calcula su true cost of water de los withdrawals que consuman o de los que les estén haciendo falta para llegar al buro, bla, bla, bla, etcétera, etcétera, so bonzo.

**Ivo Kalaizic** [00:08:46]: Falta.

**Ivo Kalaizic** [00:08:48]: A ver, si quieres déjame seguir y veo si te respondo tu pregunta.

**Ivo Kalaizic** [00:08:51]: Ok.

**Ivo Kalaizic** [00:08:52]: Básicamente entonces, primero es tipo, esto es agua de forma directa, tipo cuántos metros cúbicos de agua consumí, cuánto me serví esa agua, listo.

**Ivo Kalaizic** [00:09:00]: Voy sumando de forma directa.

**Ivo Kalaizic** [00:09:02]: Acá básicamente lo que hace es como suma la cantidad de euros y de agua.

**Ivo Kalaizic** [00:09:09]: Después arranca cuando dice, ok, ¿y por qué está este Excel?

**Ivo Kalaizic** [00:09:13]: Porque si un error cometerían sería únicamente considerar esto.

**Ivo Kalaizic** [00:09:19]: Porque porque te dicen, no, pará, yo aparte también consumo, por ejemplo, energía por usar esa agua.

**Ivo Kalaizic** [00:09:25]: ¿Por qué?

**Ivo Kalaizic** [00:09:25]: Porque tengo bombas de agua y que hacen tipo para todo el transporte de agua que hay que considerar.

**Ivo Kalaizic** [00:09:33]: Entonces acá el usuario tiene que imputear cuánta energía consumió en kilowatt-hora, cuál es el costo energético del kilowatt-hora, del euro por kilowatt-hora, y acá nuevamente se hace la multiplicación.

**Ivo Kalaizic** [00:09:47]: Acá se pifió, ¿yú?

**Sofía Agudelo** [00:09:55]: Ah, sí, se fue.

**María Berrocal Olmos** [00:10:02]: Ivo no está.

**María Berrocal Olmos** [00:10:04]: Ivo se fue.

**María Berrocal Olmos** [00:10:06]: Ivo se escapa de nuestras vidas.

**Sofía Agudelo** [00:10:15]: ¿Cómo estás, mi Sofía?

**Sofía Agudelo** [00:10:17]: Bien, Mary Moon.

**Sofía Agudelo** [00:10:19]: Bueno, no, pero es que no te puedes, que quedan en el Fathom luego.

**Sofía Agudelo** [00:10:24]: ¿Me escuchan?

**Ivo Kalaizic** [00:10:26]: ¿Estás de regreso?

**Sofía Agudelo** [00:10:28]: Sí, me corté el Wi-Fi.

**Ivo Kalaizic** [00:10:30]: ¿Perdí?

**Ivo Kalaizic** [00:10:30]: ¿Dejé de compartir?

**Ivo Kalaizic** [00:10:31]: No, ahí estás.

**Sofía Agudelo** [00:10:33]: Sigue vivo.

**Sofía Agudelo** [00:10:33]: A ver.

**Sofía Agudelo** [00:10:37]: Estabas explicándonos energía porque es como, hay un costo de energía por transportar el agua, tal vez sí.

**Sofía Agudelo** [00:10:45]: Exactamente.

**Ivo Kalaizic** [00:10:46]: Ok.

**Ivo Kalaizic** [00:10:47]: Entonces, wastewater treatment, wastewater treatment, energía eléctrica, energía térmica.

**Ivo Kalaizic** [00:10:54]: Esto, acá, copiamos exactamente lo mismo.

**Ivo Kalaizic** [00:10:57]: Tipo, comemos lo mismo y dejamos espacio igual.

**Ivo Kalaizic** [00:10:59]: Tampoco.

**Ivo Kalaizic** [00:10:59]: este comemos...

**Ivo Kalaizic** [00:11:00]: Y acá tienen que imputear cuánta energía se usó de esto y cuál fue el costo energético.

**Ivo Kalaizic** [00:11:06]: Se hace la multiplicación, perdón, se hace la división y acá se llega a un valor.

**Ivo Kalaizic** [00:11:13]: Si quieren podemos hacer un ejemplo.

**Ivo Kalaizic** [00:11:36]: Ahí está.

**Ivo Kalaizic** [00:11:37]: Esto está, este es que se les suena pija, pero básicamente acá lo que te suma es, en esta celda de acá, nada que ver, está sumando como la cantidad de costo que se consumió y la está dividiendo por la cantidad de agua que tuvimos, que consumieron.

**Ivo Kalaizic** [00:11:53]: Entonces, básicamente se termina calculando esto.

**Ivo Kalaizic** [00:12:00]: Estaría mal acá, la verdad, porque esto es total variable energy fees, y esto lo que estaríamos mirando es el costo total energético por metro cúbico.

**Ivo Kalaizic** [00:12:14]: Yo me lo puedo llevar yo para llamar ahora a Tuvías y hablarlo con él.

**Ivo Kalaizic** [00:12:18]: Pero esto es, esto viene acá, suma, y esto sería el total variable energy fees, y esto es euros sobre metro cúbico.

**Ivo Kalaizic** [00:12:41]: Después de haber hecho las de energía, viene la parte de químico.

**Ivo Kalaizic** [00:12:45]: Que también, en químico básicamente hace lo mismo, que contiene químicos hechos para el water treatment, o el mismo costo de despreciación del water treatment.

**Ivo Kalaizic** [00:13:00]: de la planta, de tratamiento, entonces queda acá de vuelta, va imputeando valor a valor, la cantidad de euros en esto, se va calculando el valor de, estoy re falopeado, pero este Excel acá está mal, porque está mal, mira, díganme si me están siguiendo, si estoy muy falopa, pero acá tengo, estoy falopa, perfecto, cuando me vengo a la energía, agarra aquí agua toda hora, multiplica por la cantidad, por el costo energético, y esto me va a una cantidad de plata, ¿estamos de acuerdo?

**Ivo Kalaizic** [00:13:48]: Ajá.

**Ivo Kalaizic** [00:13:49]: Cuando divino, acá, en esta columna, estás calculando cantidad de plata sobre cantidad de agua, en este valor no lo estás haciendo.

**Ivo Kalaizic** [00:14:00]: Porque para hacerlo bien, debería ser...

**Ivo Kalaizic** [00:14:02]: Acérdate, claro, pero eso está en metros cúbicos.

**Ivo Kalaizic** [00:14:06]: Debería ser la cantidad de plata dividida la cantidad de metros cúbicos, que es esto.

**Ivo Kalaizic** [00:14:12]: Exactamente.

**Ivo Kalaizic** [00:14:14]: Y ahí te daría, como este valor de energía es bastante más bajo, sería algo así.

**Sofía Agudelo** [00:14:23]: Me perdí porque lo dividimos entre las cantidades de agua.

**Ivo Kalaizic** [00:14:26]: Las unidades, mirá acá, tipo tenés cantidad de energía consumida, cuánto es el costo energético, eso me da un costo total de euros.

**Ivo Kalaizic** [00:14:34]: Energía.

**Sofía Agudelo** [00:14:35]: Un euro por kilowatt de energía.

**Ivo Kalaizic** [00:14:39]: Sí, exacto.

**Sofía Agudelo** [00:14:40]: Y eso significa que esa cantidad de energía que estás consumiendo te cuesta dos mil euros.

**Sofía Agudelo** [00:14:47]: Exactamente.

**Ivo Kalaizic** [00:14:48]: Ahora, yo lo que quiero saber es cuánto por metro cúbico de agua, cuánto está asociado a este costo energético puntual.

**Ivo Kalaizic** [00:14:59]: Entonces lo tengo

**Ivo Kalaizic** [00:15:00]: Tengo que dividir por la cantidad de agua consumida, es por eso.

**Ivo Kalaizic** [00:15:06]: Acá lo que importa son las unidades estas, para todo lo que también deseen.

**Sofía Agudelo** [00:15:11]: Si tú quieres averiguar un metro cúbico de agua, cuánto de cada gasto de energía se representa.

**Sofía Agudelo** [00:15:18]: Exacto.

**Sofía Agudelo** [00:15:20]: Ok, pero y eso sí es cierto, o sea, si tu consumo de agua en un mes es tanto, da un valor, y si luego otro mes consumes otro valor diferente, el costo real del metro cúbico.

**Ivo Kalaizic** [00:15:37]: Ellos, la assumption que tienen es que les piden que lo actualicen cuando uno de los costos cambia de forma relevante.

**Ivo Kalaizic** [00:15:44]: Es decir, si el costo energético, por ejemplo, y la UR Calculator es lo mismo.

**Ivo Kalaizic** [00:15:49]: Si agregan una línea nueva, es algo relevante, hay que cambiar la UR Calculator.

**Ivo Kalaizic** [00:15:53]: Si agregan acá, empiezan a consumir agua, una fuente distinta, lo van a tener que actualizar.

**Sofía Agudelo** [00:16:01]: Consulta, vuelve para arriba.

**María Berrocal Olmos** [00:16:05]: No, más para abajo.

**María Berrocal Olmos** [00:16:06]: Ah, estamos ahí.

**María Berrocal Olmos** [00:16:07]: Ok.

**María Berrocal Olmos** [00:16:12]: Ok.

**María Berrocal Olmos** [00:16:16]: Ajá.

**María Berrocal Olmos** [00:16:17]: Esto de 2.1, 2.2, 2.3, eso es general para todos los sites.

**María Berrocal Olmos** [00:16:25]: Sí.

**María Berrocal Olmos** [00:16:28]: Y ellos tienen que imputear la data que está al ladito, mismo como el de arriba, tipo tal cual.

**Ivo Kalaizic** [00:16:32]: Y en caso de que, por ejemplo, yo soy tal, lo mismo con el 1, es como todo lo que corresponde a la sección de variable water fees.

**Ivo Kalaizic** [00:16:41]: Por ejemplo, imagínate que yo uso solo municipal water y no uso pargaratuel.

**Ivo Kalaizic** [00:16:47]: Acá lo dejaré en cero y meteré todo municipal.

**Ivo Kalaizic** [00:16:50]: Y si tengo otra fuente, lo aclararé acá.

**Ivo Kalaizic** [00:16:53]: Sí, eso está perfecto.

**María Berrocal Olmos** [00:16:55]: Y lo mismo pasa con el 2, ¿puedo tener otra fuente de energía?

**María Berrocal Olmos** [00:16:58]: 100%.

**María Berrocal Olmos** [00:17:00]: Ok, perfecto, entonces hasta ahora son solo sumas, restas y divisiones con data que ellos tienen que imputear.

**Ivo Kalaizic** [00:17:08]: Sí, lo mismo pasa con los químicos, es exactamente lo mismo.

**Ivo Kalaizic** [00:17:12]: Perfecto.

**Ivo Kalaizic** [00:17:12]: Lo mismo pasa con el Waste, Waste Water Disposal.

**María Berrocal Olmos** [00:17:20]: Ajá, ok, perfecto.

**María Berrocal Olmos** [00:17:23]: Y eso porque está en amarillo, ¿no?

**María Berrocal Olmos** [00:17:24]: Que aquí le deudé en coming water.

**Ivo Kalaizic** [00:17:29]: Bueno, de hecho si es FI, prometo que hubo residuado acá.

**Sofía Agudelo** [00:17:44]: Y bueno, solo una cosa del punto que yo levanté ahora, si ellos lo hacen así, estoy ok, en colombiano diría literal que es como un pajazo mental, porque ellos cambian.

**Sofía Agudelo** [00:18:00]: El consumo del agua, el costo debería de ser otro, y no están agregando algo diferente.

**Ivo Kalaizic** [00:18:06]: No, pero lo hacen así.

**Sofía Agudelo** [00:18:07]: Listo, se entendió, ok, les copiamos, eso es para ellos, que sean felices.

**Ivo Kalaizic** [00:18:16]: Mary, te lo confirmo ahora, después de esta call le hablo todavía, si le digo de saltar en una call para revisar esto, pero básicamente, si te fijas acá, lo que dice es, tipo, le pide la cantidad de costo de carbon, le pide la cantidad de costo de esta wastewater discharges fee.

**Ivo Kalaizic** [00:18:32]: Dice, wastewater discharges fee per metro cúbico, residual water, not calculated with incoming water.

**Ivo Kalaizic** [00:18:41]: Me llevo para ver qué Joraka pone acá.

**Ivo Kalaizic** [00:18:44]: Pero después acá, este, pareciera que es un derivado del punto 4.2, que es interesante verlo.

**Ivo Kalaizic** [00:18:50]: Porque dice, if you use 4.2, you need to add the amount of metro cúbico of wastewater you raise every year, add it in C66, que es acá.

**María Berrocal Olmos** [00:19:05]: Sí, o sea, parece ser una nota muy como custom.

**Ivo Kalaizic** [00:19:09]: No, pero es como que parecería que si completan esto, podríamos pensar en que se les abra esta opción, entonces, que acá dice, if you use 4.2, you need to add the amount of, entonces, tal vez que si completan wastewater discharge fee por metro cúbico, que completen, que les aparezca como una opción que diga, ok, introduce the amount of wastewater you release every year.

**Ivo Kalaizic** [00:19:38]: Perfecto.

**Ivo Kalaizic** [00:19:40]: Bueno, viene la parte después, estas más también, después viene el quinto módulo, other variable cost, y acá le permite, como, agregar otras variables de costo.

**María Berrocal Olmos** [00:19:53]: Random, ok.

**Sofía Agudelo** [00:19:55]: Sí.

**Sofía Agudelo** [00:19:56]: Que tienen que ser divididas por el...

**María Berrocal Olmos** [00:20:00]: Sí, van a tener que ser divididas por metros cúbicos.

**Ivo Kalaizic** [00:20:07]: Tienen que ser divididas por metros cúbicos.

**Ivo Kalaizic** [00:20:09]: Yo tengo una consulta.

**María Berrocal Olmos** [00:20:12]: No, no, de tú y después yo levante la mano.

**María Berrocal Olmos** [00:20:17]: Vete un segundo para arriba.

**María Berrocal Olmos** [00:20:19]: Para arriba, para arriba, más arriba, más, más, más.

**María Berrocal Olmos** [00:20:23]: Ahí.

**María Berrocal Olmos** [00:20:24]: Total incoming water metros cúbicos.

**María Berrocal Olmos** [00:20:27]: Ese 3 millones, ¿cierto?

**María Berrocal Olmos** [00:20:30]: Ese valor es el valor de incoming water del site.

**María Berrocal Olmos** [00:20:35]: Exactamente.

**María Berrocal Olmos** [00:20:36]: Ese es el valor más importante de este Excel.

**María Berrocal Olmos** [00:20:38]: Es sobre el que estamos dividiendo todo.

**Ivo Kalaizic** [00:20:42]: 100%.

**Ivo Kalaizic** [00:20:42]: Exceptuando, lo único que también se tiene como un valor importante es el wastewater.

**Ivo Kalaizic** [00:20:48]: Claro, que esos son los inputes y...

**María Berrocal Olmos** [00:20:51]: Ok, listo.

**María Berrocal Olmos** [00:20:52]: Sí, pero por ejemplo, abajo que salía como un capítulo de Others, Other Coast, estos otros...

**María Berrocal Olmos** [00:21:00]: Y de costos es sobre igual a los 3.015 que están ahí arriba.

**Ivo Kalaizic** [00:21:04]: Sí, de hecho si te fijás acá, como que yo te voy a compartir este Excel igual, termina como siempre agarrando la celda C27, que es la de, es esta.

**Ivo Kalaizic** [00:21:17]: C27, ah, perfecto.

**María Berrocal Olmos** [00:21:21]: Ah, este está fácil.

**María Berrocal Olmos** [00:21:23]: Ahora viene, bueno, ahora entramos a lo difícil.

**Ivo Kalaizic** [00:21:26]: Ok, entonces acá te dice como que en función de todo esto, se fijan como que la lógica, lo que vino haciendo es tipo, te dice, bueno, cuánta, del costo que tenés, cuánto se debe a lo que consumiste de agua, cuánto se debe a lo que consumiste de energía por consumir esa agua, cuánto se debe a los químicos con los que trataste esa agua, cuánto se debe al wastewater de esa agua, y después tipo, tenés otras variables de costo, cuánto es.

**Ivo Kalaizic** [00:21:52]: Con todo eso, básicamente, lo que termina siendo es sumando y logrando...

**Ivo Kalaizic** [00:22:00]: Segundo, definir un operational cost of water for sites defined, defined, esto saquémoslo, me lo llevo también para ver con Tobias ahora, pero lo sacamos.

**Sofía Agudelo** [00:22:13]: Chicos, vengan, yo levanté la mano por algo, yo me debo de ir ya a otra vez, y a me interesa cerrar dos temas, ustedes pueden seguir ahí en el detalle de la bajada.

**Sofía Agudelo** [00:22:21]: Bueno, necesito que charlemos dos temas que tienen que ver con fechas y con cosas que vamos a hacer entonces.

**Sofía Agudelo** [00:22:26]: Entonces, esto, y ahí la primera cosa es, Mary Moon, Ivo quiere que hagamos esto en desarrollo la otra semana, por todo el tema del short risk con CCP.

**Sofía Agudelo** [00:22:41]: Te ves llegando con una versión de esto, no cerrada, etcétera, pero con algo para el lunes, cosa de que el martes temprano tengamos, ¿Refi?

**Sofía Agudelo** [00:22:53]: Yes, no.

**Sofía Agudelo** [00:22:55]: Sí.

**Sofía Agudelo** [00:22:55]: Y, listo.

**Sofía Agudelo** [00:22:57]: Segunda cosa relacionada a esto.

**Sofía Agudelo** [00:23:00]: Ivo, llévate y pásale relativamente temprano a Mary la lógica de agregados.

**Sofía Agudelo** [00:23:06]: sea, alguien hace este cálculo site level, esto existe site level, ¿qué pasa site group level?

**Ivo Kalaizic** [00:23:12]: ¿Qué pasa company level?

**Sofía Agudelo** [00:23:13]: ¿Qué pasa si un site ha llenado y otros no?

**Sofía Agudelo** [00:23:16]: Para site group, para company.

**Sofía Agudelo** [00:23:18]: ¿Esa lógica también va?

**Sofía Agudelo** [00:23:20]: ¿Cómo?

**María Berrocal Olmos** [00:23:21]: Esa lógica también va.

**Sofía Agudelo** [00:23:24]: O sea, el truco Stop Water se usa en general, lo utilizan ellos hoy en día.

**Sofía Agudelo** [00:23:30]: Y es, ¿qué va a empezar a pasar en general si unos sitios llenaron y otros no cuando estés en un site group o cuando estés en el company level?

**Sofía Agudelo** [00:23:40]: No creo que vuelvan a leer eso, pero me imagino que...

**Ivo Kalaizic** [00:23:42]: Eso, o sea, la calculadora esta es a nivel site.

**Ivo Kalaizic** [00:23:46]: A nivel site group hay que agregarlo, agrupar el costo, y eso ya lo estamos haciendo ahora.

**Ivo Kalaizic** [00:23:53]: Lo que estamos reemplazando ahora es este input a nivel site.

**María Berrocal Olmos** [00:24:00]: Claro, pero no es como que hay una calculadora para calcular esto a nivel company y otro para Site Group, es el agregado de los sites, de las calculadoras de los sites.

**Ivo Kalaizic** [00:24:08]: Ok, listo, okidoki.

**Sofía Agudelo** [00:24:11]: Y lo otro que quería charlar es, sabiendo, o sea, el código que yo te devolví ayer, Mary Moon, que es un código de Elena, como Elena tiene la capacidad de tomar decisiones económicas en CCP, y teniendo un charm risk es, dejamos la calculadora visible, si, no, hasta ahí, luego les metemos un tooltip, ese otro tema también quedó en el Ether.

**Sofía Agudelo** [00:24:37]: Ayer yo me llevé a charlar con Ivo, y dijimos, como que voy a dejarles el acceso a la calculadora visible, tooltip, lo iteramos, no lo iteramos, sí, pero no inmediato, piensenlo, y charlamos esa otra parte, si quieren, en la planning, y me voy a la otra planning.

**Ivo Kalaizic** [00:24:59]: Dale.

**Sofía Agudelo** [00:25:03]: Y la explicación de cómo se llega a esa lógica, que Elena también en el ticket estaba.

**Sofía Agudelo** [00:25:10]: Y no sé si eran comentarios falopas o no tan falopas.

**María Berrocal Olmos** [00:25:14]: Bueno, me escapa la planning, chicos, y los dejo que sigan ahí.

**Sofía Agudelo** [00:25:23]: ¿Me está hablando, Tomiso?

**María Berrocal Olmos** [00:25:30]: Sí, hablando.

**María Berrocal Olmos** [00:25:31]: ¿Se escucha mucho?

**Ivo Kalaizic** [00:25:32]: Está gritando.

**María Berrocal Olmos** [00:25:33]: Sí, grito.

**María Berrocal Olmos** [00:25:38]: Se entira.

**Ivo Kalaizic** [00:25:39]: A ver, ¿ahí me escuchas mejor?

**Ivo Kalaizic** [00:25:41]: Sí, sí.

**Ivo Kalaizic** [00:25:42]: No, estás jodiendo.

**María Berrocal Olmos** [00:25:43]: Bien.

**Ivo Kalaizic** [00:25:45]: Bueno, para, después de eso, ya le voy, pues justo la de la todavía, mi hijo, que no puede hoy.

**María Berrocal Olmos** [00:25:56]: O sea, yo puedo hacer una versión.

**María Berrocal Olmos** [00:25:59]: Y yo a ir mejor.

**María Berrocal Olmos** [00:26:01]: Puedo promptear hoy varias formas de hacer esto, para que entre a...

**María Berrocal Olmos** [00:26:13]: ¿Quién desarrolla esto, Juli?

**María Berrocal Olmos** [00:26:15]: ¿Y Mika?

**María Berrocal Olmos** [00:26:15]: Sí.

**Ivo Kalaizic** [00:26:17]: Ojero y Mika, somewhere, ok.

**Ivo Kalaizic** [00:26:21]: Seguramente Juli.

**María Berrocal Olmos** [00:26:22]: No me asusta, para nada.

**María Berrocal Olmos** [00:26:25]: Mi pregunta para ti es, porque si quieres lo podemos pensar juntos, por lo del churn, ¿crees que con esto nos salvamos de un churn de CCP o haya que, tipo, dar un poquito más?

**Ivo Kalaizic** [00:26:55]: Un segundo.

**Ivo Kalaizic** [00:27:00]: Vamos a tener que dar más, sí o sí.

**Ivo Kalaizic** [00:27:03]: Pero esto es tipo, Elena lo pidió cinco veces, entonces como para mostrar que iteramos rápido, lo tenemos que tener.

**María Berrocal Olmos** [00:27:17]: Ok.

**Ivo Kalaizic** [00:27:20]: Bueno, pará, hay dos cosas más que...

**Ivo Kalaizic** [00:27:23]: Yo te voy a mostrar, básicamente esto es lo que imputea el usuario.

**Ivo Kalaizic** [00:27:26]: 6 puntos, esto viene como, viene de estas partes, que dice Replenishment Project Total Cost, que incluye en la sección 6, el Leadership Location Site Only, y la sección 7, que es el Water Scarcity Risk, que dice esto, esta sección.

**Ivo Kalaizic** [00:27:57]: esto son dos dropdowns.

**Ivo Kalaizic** [00:28:00]: Entre low, medium, high, low, medium, high.

**Ivo Kalaizic** [00:28:08]: ¿Y eso lo tienen que seleccionar ellos?

**María Berrocal Olmos** [00:28:10]: ¿Tu riesgo de...?

**María Berrocal Olmos** [00:28:13]: Sí, en función del FAWA, que es un reporte que ellos hacen.

**Ivo Kalaizic** [00:28:23]: Yo acá tengo, si querés, tengo varias cosas que te puedo compartir.

**Ivo Kalaizic** [00:28:30]: Por un lado, las preguntas que yo también me las llevo para leer, para darte todas las definiciones, pero lo que tenemos, como acá, esta lógica de cálculo que armó un SPI, que es medio ahí, como, no tiene más información.

**Ivo Kalaizic** [00:28:49]: Y, por otro lado, yo hice como un análisis de...

**Ivo Kalaizic** [00:28:55]: Ah, mira, acá, tipo, básicamente lo que hice fue agarré y le pedí a Cloudcaga como un...

**Ivo Kalaizic** [00:29:00]: Reverse Engineering de toda la True Cost of Water Calculator, y le pedí que me arme como un posible design, si quieres te lo puedo mandar, no sé si te sirve de referencia, porque después volvías a meter lo tuyo.

**María Berrocal Olmos** [00:29:27]: Yo creo que quiero que sea lo más sencillo posible.

**Ivo Kalaizic** [00:29:34]: 100%.

**María Berrocal Olmos** [00:29:35]: Es como que, por eso me preguntaba, que esa parte del risk por abajo, eso me imagino que es la parte complicada que he estado diciendo.

**María Berrocal Olmos** [00:29:46]: Sí.

**María Berrocal Olmos** [00:29:47]: O sea, si es un drop también, es seleccionar easy, si es algo que nosotros tenemos que calcular, su risk score, basado en algún cálculo que tengamos que hacer en el MAC, habría que ver.

**María Berrocal Olmos** [00:30:00]: Tipo, esa lógica.

**Ivo Kalaizic** [00:30:02]: Ahora, quedate con que tienen que hacer el medium, medium, high y ya, no más.

**Ivo Kalaizic** [00:30:12]: Seleccioné.

**Ivo Kalaizic** [00:30:14]: Sí.

**Ivo Kalaizic** [00:30:16]: Listo.

**María Berrocal Olmos** [00:30:17]: Mándame si querés este HTML, yo lo reviso igual como para...

**Ivo Kalaizic** [00:30:23]: Te mando la calculadora puntual, y si querés, lo que me llevo yo a pensar, le voy a marcar una reunión a las 9 de la mañana de la Argentina, del lunes a Tobías, y con eso, tipo, le llevo todas las preguntas que tengamos y que queden pendientes, y el lunes, si querés, a las 10 de Argentina, o en la daily, que tenemos nosotros.

**Ivo Kalaizic** [00:30:57]: Si querés, nos podemos juntar.

**Ivo Kalaizic** [00:31:00]: No sé, a tus días de Argentina en el cine, no sé si tenías algo a esta hora.

**Ivo Kalaizic** [00:31:05]: ¿El lunes?

**Ivo Kalaizic** [00:31:06]: Sí.

**Ivo Kalaizic** [00:31:07]: Mi primer reunión creo que es la Daily.

**Ivo Kalaizic** [00:31:10]: Ok, si querés podemos juntarnos antes de la Daily, tipo a las 10, después de que yo me junte con Tobías, y te bajo, si nos queda alguna definición pendiente, te la bajo ahí.

**Ivo Kalaizic** [00:31:22]: Dale.

**María Berrocal Olmos** [00:31:23]: ¿Qué onda, Abby?

**María Berrocal Olmos** [00:31:24]: Estoy un poco asustada de que estamos pateando a Abby.

**Ivo Kalaizic** [00:31:26]: Abby, si querés, tipo, lo que es importante, lo que es importante de Abby es que yo estoy ahora, tipo, armando e iterando el criterio de priorización, ¿está bien?

**Ivo Kalaizic** [00:31:56]: Una vez que tengamos el criterio de priorización, tengo que, tipo, validar.

**Ivo Kalaizic** [00:32:00]: Lo con el senior water advisor y validarlo con AVI, es lo más importante.

**María Berrocal Olmos** [00:32:04]: ¿Y en qué priorización te refieres como a los scoring, tipo a los weights que le vamos a dar al criteria para?

**Ivo Kalaizic** [00:32:12]: Sí, que para mí no va a ser tan configurable, si querés tipo que te diga.

**Ivo Kalaizic** [00:32:16]: Va a ser más tipo pujeá, apretá, que agarra una priorización.

**Ivo Kalaizic** [00:32:23]: Pero estoy intentando armar la lógica detrás.

**Ivo Kalaizic** [00:32:25]: Cuando la tenga validada con ellos, te la voy a compartir a vos, a ser la primera persona que te lo comparta.

**Ivo Kalaizic** [00:32:30]: Espero que sea, tipo, a fin de la semana que viene, tipo, como para que la otra semana vos puedas empezar a laburar.

**María Berrocal Olmos** [00:32:38]: Ok.

**Ivo Kalaizic** [00:32:39]: Yo siento que vos lo vas a armar en lo que necesites, y después lo vas a ingeniería.

**María Berrocal Olmos** [00:32:49]: Ok.

**María Berrocal Olmos** [00:32:52]: Perfecto.

**María Berrocal Olmos** [00:32:52]: Y también tengo en mi radar, que asumo que ya Tomigros te contó, que me pidieron como un...

**María Berrocal Olmos** [00:33:00]: Una mano en site-screening, cool.

**María Berrocal Olmos** [00:33:04]: No tiene deadline ni nada, simplemente me pidieron como apenas puedas ir trabajando en eso, do it.

**María Berrocal Olmos** [00:33:12]: ¿Qué más tengo?

**María Berrocal Olmos** [00:33:17]: Creo que ya, lo de marketing, ayer hablé con Luisi.

**María Berrocal Olmos** [00:33:20]: ¿Qué fue?

**María Berrocal Olmos** [00:33:21]: Demandaron en California, no entendí, ¿cómo?

**María Berrocal Olmos** [00:33:23]: Ay, qué aburrido todo lo que me tocó hacer ayer.

**Ivo Kalaizic** [00:33:32]: Salimos de pádel, Mika y yo todas felices, uuuh, y de repente tipo, jodan, mati.
