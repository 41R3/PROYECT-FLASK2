from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def inicio():
    return render_template("NEWHTML.html")
@app.route('/procesar', methods=['POST'])

   
app.run(debug=True,port=5000)



