from flask_wtf import FlaskForm
from wtforms import URLField,BooleanField
from wtforms.validators import InputRequired,DataRequired


class ProductImageForm(FlaskForm):
    url = URLField('url',validators=[DataRequired()])
    preview_image = BooleanField('preview_image', validators=[DataRequired()])
