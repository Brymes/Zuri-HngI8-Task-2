from datetime import datetime
from extensions import db

class Messages(db.Model):

    __tablename__ = "Messages"

    id = db.Column(db.Integer, primary_key=True)

    full_name = db.Column(db.String(76))
    email = db.Column(db.String(101))
    message = db.Column(db.Text())

    def data(self):

        return {
            "id": self.id,
            "full_name": self.full_name,
            "email": self.email,
            "message": self.message,
        }
    @classmethod
    def get_by_email(cls, email):
        return cls.query.filter_by(order_id=order_id).all()
    
    @classmethod
    def get_all(cls):
        return cls.query.all()

    def save(self):
        db.session.add(self)
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()