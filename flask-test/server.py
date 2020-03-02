from flask import Flask
from flask_restful import Api, Resource, reqparse
import logging
log = logging.getLogger('werkzeug')
log.setLevel(logging.ERROR)

app = Flask(__name__)
api = Api(app)

class Test(Resource):
    def get(self, val):
        result = 0
        for i in range(int(val)):
            result = result + 1
        return result

api.add_resource(Test, '/api/test/<int:val>')

if __name__ == '__main__':
    app.run(port='3002')
