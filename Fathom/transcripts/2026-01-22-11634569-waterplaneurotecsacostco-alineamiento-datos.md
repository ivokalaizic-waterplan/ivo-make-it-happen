# Waterplan<>Eurotecsa<>Costco : Alineamiento datos
**Date:** 2026-01-22T15:55:35Z
**URL:** https://fathom.video/calls/540412681
**Participants:** Jeronimo Misa (jeronimo.misa@waterplan.com), Tomas Gomez (tomas.gomez@waterplan.com), avaldes@costco.com.mx (avaldes@costco.com.mx), Andrés Estrada (andreseg@eurotecsa.com), Roberto Ochoa (rochoa@eurotecsa.com), Paz Estévez Ercasi (paz.estevez@waterplan.com), Luis Garza (luis.garza@panpower.com), zarin.keydar@panpower.com (zarin.keydar@panpower.com), Ivo Kalaizic (ivo.kalaizic@waterplan.com)

---

**Ivo Kalaizic** [00:00:00]: Parte de tu equipo.

**Andrés Estrada** [00:00:02]: Podemos empezar, por mi parte, no tengo inconveniente.

**Andrés Estrada** [00:00:07]: Ayer tuve una sesión con la gente de TI, de Panoramic, entonces creo que estoy en el mismo canal, no con lo que me comentaron ellos, ¿no?

**Andrés Estrada** [00:00:18]: De hecho, si te parece bien, aquí está Sarín.

**Andrés Estrada** [00:00:24]: Si quieres dudas técnicas, vamos a llevar la sesión en inglés, ¿eh?

**Andrés Estrada** [00:00:29]: Por favor.

**Andrés Estrada** [00:00:31]: Sí, no tengo problema a todo.

**Ivo Kalaizic** [00:00:34]: Me llamen un amigo, quiero saber si estábamos.

**Ivo Kalaizic** [00:00:39]: Hola, buen día.

**zarin keydar** [00:00:40]: Buenas tardes.

**Andrés Estrada** [00:00:41]: Sarín.

**Andrés Estrada** [00:00:42]: Gracias por estar con nosotros.

**Andrés Estrada** [00:00:43]: Buenas tardes.

**Ivo Kalaizic** [00:00:45]: Buenas tardes.

**Ivo Kalaizic** [00:00:47]: Buenas tardes.

**Ivo Kalaizic** [00:00:49]: Así que, para dar un comentario, no sé si ya no todo el contexto, si no, creo que es valioso para este.

**Ivo Kalaizic** [00:00:58]: Buenas As you already know, we are...

**Ivo Kalaizic** [00:00:59]: are already integrated with your data, you're providing data from costcommiters into Waterplan, and with all that data, we are populating that in different dashboards, and we created an alerting system, and in the last month, we've been having some issues when we rely on that data, and maybe later, Jero can give us some more details.

**Ivo Kalaizic** [00:01:29]: But as you know, we already mentioned something in the emails.

**Ivo Kalaizic** [00:01:32]: don't know, Andrés, if you had the opportunity to discuss this, we...

**Andrés Estrada** [00:01:35]: Yeah, yeah, we discussed it internally.

**Andrés Estrada** [00:01:39]: Okay.

**Andrés Estrada** [00:01:41]: I don't know if you have something else to say, or if you want us to enter into the matters of the email context.

**Ivo Kalaizic** [00:01:50]: Yes, just, if you can wait me just one minute.

**Ivo Kalaizic** [00:01:56]: Yes, just, if you have something else say, else else if if or

**Ivo Kalaizic** [00:02:20]: If not, I don't know, Jero, we can start, no?

**Ivo Kalaizic** [00:02:25]: Yeah, for sure.

**Jerónimo Misa** [00:02:27]: So there are two main issues we've been having.

**Jerónimo Misa** [00:02:31]: The first one is that the meters upload the data to the server, which I understand is in panoramic transfer server.

**Jerónimo Misa** [00:02:39]: And they upload the same file, but with a millisecond difference and with different names.

**Jerónimo Misa** [00:02:48]: So we get duplicated information.

**Jerónimo Misa** [00:02:50]: I don't know if this is a problem in the panoramic side or from the meters, which upload the data.

**Jerónimo Misa** [00:03:00]: But we do see those kind of issues.

**Jerónimo Misa** [00:03:02]: Later, I can give you precise names, for example, of two files which are the exact same and have like 0.5 seconds difference when uploading.

**Jerónimo Misa** [00:03:14]: And the second one is that there has been some data that is missing.

**Jerónimo Misa** [00:03:20]: So the emitters are not uploading the data to the server.

**Jerónimo Misa** [00:03:25]: So we get either delay data or no data at all.

**Jerónimo Misa** [00:03:30]: For example, we had a case from the site of Merida, if I'm not mistaken, for the date of 18th January this year, where we have no minute data from 13 hours onwards, UPC, of course.

**Jerónimo Misa** [00:03:50]: So those are the two main issues.

**Jerónimo Misa** [00:03:52]: We are deduplicating the data ourselves, but we think that this might be an issue for us.

**Jerónimo Misa** [00:04:00]: server to correct for the meters, especially because it is duplicating the workload and processing from our side.

**Jerónimo Misa** [00:04:09]: But those are the two main issues.

**zarin keydar** [00:04:12]: Those two issues are related to each other, except for the missing data, which we can have a second discussion.

**zarin keydar** [00:04:20]: But what happens is not all data is available in real time.

**zarin keydar** [00:04:27]: Sometimes, and in many cases, data is arriving late.

**zarin keydar** [00:04:32]: It's arriving late because there is a network delay or because the bridge itself is offline while it's still collecting data.

**zarin keydar** [00:04:41]: Also, it's possible that there are multiple bridges that get the sensor data.

**zarin keydar** [00:04:50]: And sometimes data arrives later on that has a stronger signal.

**zarin keydar** [00:05:00]: So the logic is that when you receive data from the same device with a different date, you have to take the data with a later date and overwrite the existing one.

**zarin keydar** [00:05:20]: Sometimes it's going to be the same, sometimes it's going to be different.

**zarin keydar** [00:05:25]: But the CSV filename includes it, is set up of a date and time.

**zarin keydar** [00:05:35]: So when you observe that you receive data for the same time period, for the same meter, for the same sensor, the logic is you take the data from the latest file, from the latest timestamp, and overwrite the existing one.

**zarin keydar** [00:05:54]: And again, the value can be the same, or the value can be different.

**zarin keydar** [00:05:58]: But one of the latest...

**zarin keydar** [00:06:00]: This daytime, that's the one that should be used, and override the existing one.

**zarin keydar** [00:06:07]: Now, for where data is missing, we have to see, is there data available in the system?

**zarin keydar** [00:06:14]: Okay, we just need to understand, it's possible that maybe the communication bridge went offline, and indeed data is missing, or data will arrive at a later time.

**zarin keydar** [00:06:26]: Okay, so we have to look at that, missing data, we need to look, we need to investigate on a case-by-case basis.

**zarin keydar** [00:06:33]: But what we call duplicates, it's perfectly normal, and the logic is, you take the value from the latest daytime, the latest timestamp.

**zarin keydar** [00:06:46]: Does that make sense, please?

**zarin keydar** [00:06:49]: Yeah, just, so I recap, so that, to make sure that I understood everything correctly, so I will be sending the name of two files, because we both have the exact same.

**zarin keydar** [00:07:00]: A timestamp from the millisecond cost.

**Jerónimo Misa** [00:07:04]: So when I receive those two, if they are for the same meter, for the same site, and for the same measurement time, then I take the data from the last one only.

**Jerónimo Misa** [00:07:16]: Yes, so from overwrite, not overwrite the previous value.

**Jerónimo Misa** [00:07:22]: Yeah, fully understood.

**Jerónimo Misa** [00:07:26]: Because this is also what happens in time view.

**zarin keydar** [00:07:30]: But in time view, many times, we visually, we identify data that arrived late.

**zarin keydar** [00:07:42]: Sometimes hours, sometimes even days, depending when the communication device went back online.

**Jerónimo Misa** [00:07:52]: Perfect.

**Jerónimo Misa** [00:07:53]: Perfect.

**Jerónimo Misa** [00:07:53]: Super clear.

**Jerónimo Misa** [00:07:54]: We will make sure to implement this new logic into our system.

**Jerónimo Misa** [00:07:59]: So we can do...

**zarin keydar** [00:08:01]: And for data that is missing, please send us an email, send to Andrés, email, he can forward this to me, with specific examples of where you have data missing, what site, what device, what time frame, so we can look to see what happened there.

**zarin keydar** [00:08:21]: How often do you have missing data?

**Jerónimo Misa** [00:08:28]: I cannot tell you for sure, like, an exact, we take cases, like, we know it might not arrive at the, during a time frame, it might arrive a little later during the day, which is, like, I don't know, nine hours, or even anything.

**zarin keydar** [00:08:46]: Yes, yes.

**zarin keydar** [00:08:51]: Especially when someone enters the dashboard and sees that there is effectively no data, it will be.

**Jerónimo Misa** [00:09:00]: You can make sure to get some examples so we can better understand why we are missing the data.

**Jerónimo Misa** [00:09:10]: I remember this case right now, but I know there are others as well.

**zarin keydar** [00:09:17]: So you share all this information and we can look at it together.

**zarin keydar** [00:09:24]: Anything other topics to discuss, please?

**zarin keydar** [00:09:28]: Or are we okay for now?

**Ivo Kalaizic** [00:09:31]: No, what I just want to make sure is just like two things.

**Ivo Kalaizic** [00:09:39]: The first one, Salina, thanks for all the explanation.

**Ivo Kalaizic** [00:09:42]: We will develop that and we are going to implement those changes.

**Ivo Kalaizic** [00:09:47]: Thanks again for all the explanation.

**Ivo Kalaizic** [00:09:50]: If we found any type of feature or if we find where we are missing the data, we will bring you via email.

**Ivo Kalaizic** [00:10:00]: And I will super be, we will be, we will appreciate if we can like jump into a call easily and if we don't expect too much or too longer time, because at the end, you did a question that was like, how often you're missing data?

**Ivo Kalaizic** [00:10:17]: And the thing is that we are knowing this by a huge impact, and it's that when the costco managers access to Waterplan platform, they don't find the data, and they are trying to do that.

**Ivo Kalaizic** [00:10:32]: And this is having an impact on their daily work.

**Ivo Kalaizic** [00:10:36]: So that's why we held this call, and we will implement those changes.

**Ivo Kalaizic** [00:10:42]: Yes, but well, I just want to ensure that we have all the understanding from our side to implement those changes, Jero.

**Ivo Kalaizic** [00:10:50]: And if you consider that with those changes, we will be fine.

**Ivo Kalaizic** [00:10:56]: Thank you.

**zarin keydar** [00:10:57]: Yeah.

**Jerónimo Misa** [00:11:00]: We will be able to implement those changes.

**Jerónimo Misa** [00:11:03]: I'm more worried about the missing data, but Saline said, we just have to email them and see what is happening, that there is no data, whether the meters are going off, or there is something else going on.

**Jerónimo Misa** [00:11:20]: So for the overwriting development, we are able to do that, or the missing data, we'll have to follow on.

**zarin keydar** [00:11:31]: So keep us informed, and we will look at specific examples.

**zarin keydar** [00:11:40]: Yes, please.

**zarin keydar** [00:11:42]: Okay.

**zarin keydar** [00:11:43]: Very well.

**Ivo Kalaizic** [00:11:49]: Okay.

**Ivo Kalaizic** [00:11:50]: Andrés, anything else to discuss?

**zarin keydar** [00:11:52]: Are we okay?

**zarin keydar** [00:11:53]: No, Serene.

**zarin keydar** [00:11:54]: Thank you very much for joining.

**Andrés Estrada** [00:11:55]: Okay.

**Andrés Estrada** [00:11:55]: Thank you for your time.

**zarin keydar** [00:11:56]: Good luck, and we're going to be in touch.

**zarin keydar** [00:11:58]: Thank you.

**zarin keydar** [00:11:58]: Yes, thank you, Serene.

**Andrés Estrada** [00:11:59]: Thank you.

**Ivo Kalaizic** [00:12:06]: Bueno, Andrés, muchas gracias por la sesión.

**Ivo Kalaizic** [00:12:10]: Creo que la clave, si querés Andrés, si nosotros vamos a hacer este análisis después, pero si vamos a tener como, como lo estuvieron haciendo, pero como mucha colaboración de ambos lados para poder popular la data de una forma, lo más en real-time posible como venimos haciendo, porque nuevamente el impacto que tiene tal vez no es tanto para nosotros, sino para los empleados de Costco que están accediendo muchísimo a nuestros dashboards, el sistema de alertado, entonces bajo la falta de data básicamente intentan buscar información y no la encuentran y eso es un problema mental.

**Andrés Estrada** [00:12:47]: De acuerdo, sí, digo, aquí sí me gustaría entender cuáles son los casos donde hay misintegra para entender si es por el lado de, de físicamente del equipo, si es por.

**Andrés Estrada** [00:13:00]: Si es por el lado mecánico del medidor o si es meramente por problema energético.

**Andrés Estrada** [00:13:08]: Por experiencia en los tres años que llevamos trabajando con este proyecto, suele pasar que ocupan el contacto físico para una extensión y se les olvida reconectar el equipo.

**Andrés Estrada** [00:13:21]: O ha pasado también que el medidor físico, Costco tiene varias marcas.

**Andrés Estrada** [00:13:28]: Uno de los medidores físicos que tienen, mecánicos, ocupa unas baterías para mandar la información a nuestro equipo y posteriormente a nosotros a la plataforma.

**Andrés Estrada** [00:13:38]: Esos equipos luego se quedan sin batería, sin pila y tampoco tienes lectura mecánica físicamente en pantalla, display, porque físicamente el medidor pues ya no tiene batería para comunicarse con nosotros.

**Andrés Estrada** [00:13:51]: O también otra ocasión que nos ha pasado es mecánicamente la turbina se obstruye, sigue.

**Andrés Estrada** [00:14:00]: Dejando pasar flujo, pero no cuantifica porque no hay un giro mecánico.

**Andrés Estrada** [00:14:04]: Entonces, por eso menciono todas estas variables porque puede ser desde eso o puede ser incluso sí que problema nuestro en la comunicación con el sistema o nuestro sistema está comunicándose o puede ser internamente en la plataforma.

**Andrés Estrada** [00:14:19]: Entonces necesitamos analizar qué caso es para descartar cuáles sean las razones, ¿no?

**Andrés Estrada** [00:14:26]: Excelente.

**Tomás Gómez** [00:14:27]: Perdón, le demoro en sumarme.

**Tomás Gómez** [00:14:29]: Andrés, Roberto, ¿cómo están?

**Tomás Gómez** [00:14:30]: Gracias, Andrés, por estos detalles que creo que por lo menos yo hasta el momento no los tenía.

**Tomás Gómez** [00:14:35]: Hay algo que estaría bueno tener por ahí como para también poder darle soporte a nuestro lado, sería saber qué plantas tienen qué tipo de medidores.

**Tomás Gómez** [00:14:43]: Entonces, por ejemplo, el otro día lo que habíamos experimentado fue con el caso de Merida, que para el 18 de enero ya era como las 5 o 6 de la tarde en Argentina.

**Tomás Gómez** [00:14:52]: Todavía no estábamos recibiendo data en la plataforma con todo lo que Jerónimo estuvo armando en cuanto a la ingesta de...

**Tomás Gómez** [00:15:00]: Datas para poder llevar lo que tienen en el Eurotecsa al dashboard, entonces ahí lo que pasó fue que el cliente, bueno, nos vino a comentar de que no había data, hicimos una revisión y efectivamente lo que estaba pasando era que la data no se estaba guardando en los archivos que Eurotecsa genera y no lo estábamos recibiendo.

**Tomás Gómez** [00:15:17]: Hay algo más, está bueno todos estos comentarios que nos acabas de hacer, no sé si son todos los posibles casos que podrían llegar a pasar, si son todos, lo que estaría bueno, Ivo, nosotros por lo menos de nuestro lado, es darle visibilidad a Cris y darle visibilidad al equipo de Costco, por lo menos en los dashboards, dejar en caso de que no haya data, lo que puede haber pasado es que tal medidor que es mecánico o necesita una batería, no tiene la batería, entonces por favor revisar la batería, o cualquier tipo así para evitar reclamos tanto a nosotros como para Eurotecsa.

**Tomás Gómez** [00:15:52]: Y otra cosa, Andrés, que estaría bueno alinear es, en caso de que no se visualice data en la plataforma de Waterplan,

**Tomás Gómez** [00:16:00]: Nosotros estamos recibiendo esto, pero ¿vos crees que sería más cómodo para ustedes que nosotros sigamos recibiendo este tipo de requests y este tipo de comentarios y se los levantemos a ustedes?

**Tomás Gómez** [00:16:14]: ¿O que el equipo de Costco se contacte con ustedes directamente después de ver que en Eurotecsa no había data?

**Andrés Estrada** [00:16:22]: Por mi lado, cualquiera de las dos, digo, por mí, si quieren otra angular, mejor.

**Andrés Estrada** [00:16:31]: Yo, nosotros hemos estado disponibles, digo, porque nos escriben, justamente, no, o sea, la semana, la semana estuvimos en contacto, creo que con Guadalajara o algo, igual tenían un problema en uno de los medidores que tienen y normalmente la gente de mantenimiento se comunica directamente con Roberto, quien es el que está dando todo el soporte o el seguimiento.

**Andrés Estrada** [00:16:54]: Entonces, la comunicación, si ustedes se enteran y nosotros no, no nos pueden comunicar sin ningún problema.

**Andrés Estrada** [00:17:00]: Problema, y bueno, si nosotros nos enteramos, pues lo atendemos sin ningún problema de igual manera, ¿no?

**Andrés Estrada** [00:17:06]: Excelente, excelente, gracias, Andrés.

**Andrés Estrada** [00:17:08]: Lo que si te gustas te podemos ayudar es hacer un, como un cuestionado de falla, si no encuentran medición, como unos bullet points a revisar.

**Andrés Estrada** [00:17:21]: Eso, eso, excelente.

**Tomás Gómez** [00:17:23]: Eso lo podríamos, si querés para, como reminder, te lo pasamos por la misma cadena que estuvimos, organizando esta reunión y levantamos eso y así nos compartís y eso lo podemos dejar nosotros directamente lo que tenemos nosotros y ya para que el usuario cuando vaya y vea que no hay data para las últimas, no sé, 10, 12 horas, porque no ha sido mucho más el tiempo que pasa hasta que se reactiva.

**Tomás Gómez** [00:17:46]: Es, bueno, nada, que tenga, entienda que puede estar pasando por la batería o porque por algún otro.

**Andrés Estrada** [00:17:51]: Sí, que cheque estos bullet points y ya cuando llegue con nosotros ya lo tiene más afinado y no empezamos de cero a decir, ve físicamente el medidor, el medidor.

**Andrés Estrada** [00:18:00]: Camina, sí.

**Andrés Estrada** [00:18:01]: Ah, bueno, entonces el medidor físicamente sí funciona.

**Andrés Estrada** [00:18:04]: El puente está conectado, sí.

**Andrés Estrada** [00:18:06]: Ah, bueno, o sea, hacerle esos bullet points y cuando levanten la mano para el request, pues ya va mucho más afinado a qué se tiene que hacer, ¿no?

**Andrés Estrada** [00:18:16]: Excelente.

**Andrés Estrada** [00:18:16]: Tengo una consulta más, Andrés.

**Tomás Gómez** [00:18:18]: Mencionaste que la turbina puede, es como que, bueno, sigue funcionando y el agua sigue fluyendo, pero lo que pasa es que no está cuantificando.

**Tomás Gómez** [00:18:27]: ¿Cuándo ocurre esto?

**Tomás Gómez** [00:18:30]: ¿Se pierde el detalle de la información minutal o el medidor sigue guardando esta data?

**Tomás Gómez** [00:18:35]: no, no, no.

**Tomás Gómez** [00:18:36]: Se pierde por completo.

**Andrés Estrada** [00:18:37]: El medidor, casi todos los que funcionan de flujo es una turbina.

**Andrés Estrada** [00:18:41]: Esa turbina gira como revoluciones y el medidor por diámetro sabe cuánto es una revolución, entonces cuánto es en flujo y cuánto es en volumen.

**Andrés Estrada** [00:18:51]: Nos ha pasado que se obstruye la turbina por cuestión que lleva suciedad y...

**Andrés Estrada** [00:18:59]: Y...

**Andrés Estrada** [00:19:00]: No es una obstrucción total, sino es una obstrucción donde la turbina solo se amarra, pero sigue habiendo capacidad de flujo continuo, ¿no?

**Andrés Estrada** [00:19:09]: Por la presión que lleva el agua.

**Tomás Gómez** [00:19:12]: Perfecto, ok, eso es bueno saberlo también.

**Andrés Estrada** [00:19:15]: Entonces no hay manera ni de saber físicamente porque el medidor, para el medidor no está caminando, entonces el medidor no tiene ni, o sea, si el medidor no tiene forma de cuantificar, pues nosotros menos, porque yo no estoy recibiendo un contador.

**Andrés Estrada** [00:19:32]: Ok, ok, excelente.

**Tomás Gómez** [00:19:36]: Bien, bien, está, o sea, está bien, bueno saberlo.

**Tomás Gómez** [00:19:41]: Sí, nos sirve también esta información, así que, excelente.

**Ivo Kalaizic** [00:19:44]: Jerónimo, ¿me hacías una pregunta?

**Ivo Kalaizic** [00:19:46]: Perdón.

**Jerónimo Misa** [00:19:48]: No, no, no, era que yo tenía entendido que era un problema de comunicación con el servidor porque sigue midiendo el medidor porque efectivamente...

**Jerónimo Misa** [00:20:00]: Termina llegando la información, pero llega más tarde, entonces es como que no se puede comunicar con el servidor como para enviarle la data, o el propio servidor no la sac no le llega.

**Jerónimo Misa** [00:20:14]: Pero, si existen Adelante, Roberto.

**Andrés Estrada** [00:20:26]: Estás en mi otro, Roberto.

**Andrés Estrada** [00:20:28]: Perdón.

**Roberto Ochoa** [00:20:29]: Si existen algunos casos en los que, como comentó esta Jerónimo, Si hay algunos casos en el que el medidor está contando, la data está guardándose en el puente y el puente por alguna situación en la comunicación hacia la plataforma, que puede ser cuestión de la compañía celular, de la red, de varias cosas que están pasando entre el puente de comunicación y la plataforma.

**Roberto Ochoa** [00:21:00]: Si llega a suceder que están midiendo, está guardando información, pero no se está comunicando la plataforma.

**Roberto Ochoa** [00:21:06]: Entonces, en el momento en el que se vuelve a reconectar a la plataforma, empieza a descargar toda esta información atrasada.

**Roberto Ochoa** [00:21:16]: Entonces, ahí sí, es lo que comentaba Sarim, tiene esa información que sí se registró en el puente, hubo un detalle de comunicación de redes entre el puente y la plataforma, y cuando se reconecta, la ventaja, cuando eso sucede, es que la información sí se guardó, ¿no?

**Roberto Ochoa** [00:21:39]: Y puede ser, el asunto es que también esa información, incluso cuando nosotros la vemos visualizada en la plataforma de Céntrica, en los TimeViews, puede llegar a tardar, de que ya se reconectó el puente, yo ya veo, el puente me dice, ya estoy conectado, ya estoy en línea, pero de que la información atrasada...

**Roberto Ochoa** [00:22:00]: Pasada, se vaya cargando y viendo, puede llegar a tardar, como dijo Sarín, minutos, horas o a veces días.

**Roberto Ochoa** [00:22:08]: También dependiendo qué tanta información fue la que no pudo mandar, ¿no?

**Tomás Gómez** [00:22:14]: Ok, bien, sí, acá fue exactamente lo que pasó con, gracias, Ivo, fue exactamente lo que pasó con este caso que levantamos, creo que fue el día 19 de enero, hace un par de, sí, o el viernes anterior, la verdad que no recuerdo 100% el día, pero había un par de días que estaban, bueno, sin data, y seguramente estaba pasando esto, y hoy lo fuimos a revisar nuevamente y ya estaba la data actualizada.

**Tomás Gómez** [00:22:40]: Así que está bien, perfecto eso.

**Tomás Gómez** [00:22:43]: Y una pregunta, perdón por esto, por ahí ya lo alinearon, ahí Gero, no sé si, sobre el tema de los valores duplicados, cómo vamos a estar tratándolos y cuáles son las soluciones que tenemos para eso.

**Tomás Gómez** [00:22:57]: Hay que pisarlo de nuestro lado cuando...

**Jerónimo Misa** [00:23:00]: Vemos que efectivamente hay algún valor duplicado, tomamos el último.

**Jerónimo Misa** [00:23:06]: Ok, el último.

**Tomás Gómez** [00:23:07]: Perfecto.

**Tomás Gómez** [00:23:08]: Bien, excelente.

**Tomás Gómez** [00:23:11]: Bueno, perfecto.

**Tomás Gómez** [00:23:12]: Creo que yo de mi lado no tengo más dudas, después si Andrés lo que te voy a estar pidiendo van a ser esos detalles de, bueno, qué tipos de medidores pueden ver las plantas, cuáles son las posibles causas que hagan que la data no aparezca, entonces eso lo agregaríamos nosotros en el dashboard, y entonces para que la gente de Costco tenga entendimiento de por qué está pasando eso.

**Tomás Gómez** [00:23:33]: Vale, de acuerdo.

**Andrés Estrada** [00:23:35]: Te hago la, la, trabajamos en una lista de posibles fallas, le ponemos unas fotos para que identifique el medidor, y como si fuera programación, ¿no?

**Andrés Estrada** [00:23:48]: if, pasa esto, haz esto, no, haz esto.

**Andrés Estrada** [00:23:54]: Buenísimo, bueno, excelente, muy útil.

**Tomás Gómez** [00:23:58]: Sí.

**Tomás Gómez** [00:23:58]: Vale.

**Tomás Gómez** [00:24:00]: Perfecto.

**Tomás Gómez** [00:24:00]: Gracias a todos.

**Tomás Gómez** [00:24:01]: Buen día.

**Andrés Estrada** [00:24:02]: No, por favor.

**Andrés Estrada** [00:24:03]: Gracias a todos.

**Tomás Gómez** [00:24:03]: Gracias, Andrés y Roberto, y gracias por el tiempo.

**Tomás Gómez** [00:24:06]: Un abrazo.

**Tomás Gómez** [00:24:06]: Hasta luego.

**Tomás Gómez** [00:24:07]: Muchas gracias.

**Andrés Estrada** [00:24:08]: Hasta luego.
