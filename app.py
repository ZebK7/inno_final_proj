from flask import Flask, render_template
from views import my_view
from flask_bootstrap import Bootstrap5

app = Flask(__name__)
app.register_blueprint(my_view)

@app.errorhandler(404)
def page_not_found(e):
    return render_template("404.html", e=e)

@app.errorhandler(500)
def internal_server_error(e):
    return render_template("500.html", e=e)

if __name__=="__main__":
    app.run(debug=True, port=8000) 