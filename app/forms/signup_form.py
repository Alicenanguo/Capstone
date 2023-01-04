from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, ValidationError,Length
from app.models import User


def user_exists(form, field):
    # Checking if user exists
    email = field.data
    user = User.query.filter(User.email == email).first()
    if user:
        raise ValidationError('Email address is already in use.')


def username_exists(form, field):
    # Checking if username is already in use
    username = field.data
    user = User.query.filter(User.username == username).first()
    if user:
        raise ValidationError('Username is already in use.')

def check_email(form,field):
    email = field.data
    if "@" not in email:
        raise ValidationError('please enter a valid email.')



class SignUpForm(FlaskForm):
    first_name = StringField(
        'first_name',validators=[DataRequired(),
         Length(max=255, message="FirstName could not greater than 255 characters")
        ])
    last_name = StringField(
        'last_name', validators=[DataRequired(),
        Length(max=255, message="LastName could not greater than 255 characters")
        ])
    username = StringField(
        'username', validators=[DataRequired(), username_exists,
        Length(max=255, message="Username could not greater than 255 characters")
        ])
    email = StringField('email', validators=[DataRequired(), user_exists, check_email,
        Length(max=255, message="Email could not greater than 255 characters")
        ])
    password = StringField('password', validators=[DataRequired(),
        Length(min=6, max=255, message="Password must between 6 and 255 characters")
        ])
