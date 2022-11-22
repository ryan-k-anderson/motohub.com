import mysql.connector

mydb = mysql.connector.connect(
    host='localhost',
    user='root',
    passwd='@scension01!',
)

if mydb.is_connected==False:
    print('Unable to connect')

mycursor = mydb.cursor()

mycursor.execute("show databases")

for i in mycursor:
    print(i)