from flask_wtf import FlaskForm
from wtforms import URLField
from wtforms.validators import InputRequired,DataRequired,BooleanField


class ProductImageForm(FlaskForm):
    url = URLField('url',validators=[DataRequired()])
    preview_image = BooleanField('preview_image', validators=[DataRequired()])
