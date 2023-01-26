import sqlite3

conn = sqlite3.connect('database')

cursor = conn.cursor()

cursor.execute("SELECT * FROM programmers")
print(cursor.fetchall())

conn.close()