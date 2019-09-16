SimpleChat

Schriftart: Roboto
Body Schriftgroesse: 16px
Schriftgroesse Button, Input, Text: 1rem
Innenabstaende Input: .5rem
Innenabstaende Button: .5rem 1.5rem

Text Farbe: #d0d0d0

Input Background: #d0d0d0

Page Background: #242424
Bar Background: #191919


Einfach mal so in plain HTML/CSS umsetzen wie du es bisher machen wuerdest.
Ich schau mir dann morgen mal an wie der Code aussieht und wie du an so
etwas herran gehst. Wir werden das vorraussichtlich dann noch einmal neu
implementieren da fuer die WebApp ein Framework zum Einsatz kommt, dass fast
vollstaendig ohne natives HTML auskommt.


Was ich insgesammt mit dir vor habe ist folgendes:

Eine einfache Chat Application ohne Usermanagement und Authentification.
Geschrieben in Typescript und Golang. D.h. das Frontend bauen wir mit Preact
und das Backend mit Go. Man wird sich mit meheren Personen auf die Seite
verbinden und Nachrichten schreiben koennen. Quasi in etwa wie ein
90er Jahre Chat bzw. die LiveChats in Youtube. Mit "@username" koennen Nachrichten
visuell fuer eine Person hervorgehoben werden. Ausserdem wird man sich eine 
Chatfarbe und einen Namen aussuchen koennen.

Ich werde dir auch zeigen wie man Unit Test schreiben kann. Sowohl fuer das Backend
als auch das Frontend.