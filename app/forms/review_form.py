from flask_wtf import FlaskForm
from wtforms import StringField,IntegerField,DecimalField,SelectField,TextAreaField
from wtforms.validators import DataRequired, ValidationError,Length,NumberRange

class ReviewForm(FlaskForm):
    review = TextAreaField('review',validators=[Length(max=2000, message="Review could not greater than 2000 characters")])
    stars = IntegerField('stars', validators=[DataRequired(), NumberRange(min=1, max=5, message='Stars must be between 1 and 5')])
