/*eslint-env browser */
/*globals parser:true ICalParser*/
var calString = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Cozy Cloud//NONSGML Cozy Agenda//EN
BEGIN:VTODO
DTSTAMP:20130609T150000Z
SUMMARY:my description thea
UID:john
BEGIN:VALARM
ACTION:DISPLAY
REPEAT:1
TRIGGER:20130609T150000Z
END:VALARM
END:VTODO
END:VCALENDAR`;
 
var parser = new ICalParser();
parser.parseString(calString,/* @callback */ function(err, cal) {
  console.log(cal.name);
  console.log(cal.getRawValue('PRODID'));
  console.log(cal.subComponents[0].name);
  console.log(cal.subComponents[0].getRawValue('SUMMARY'));
});
