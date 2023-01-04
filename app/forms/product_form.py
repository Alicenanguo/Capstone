from flask_wtf import FlaskForm
from wtforms import StringField,IntegerField,DecimalField,SelectField
from wtforms.validators import DataRequired, ValidationError,Length,NumberRange



class ProductForm(FlaskForm):
    seller_id= IntegerField('seller_id')
    category_id = IntegerField('category_id', validators=[DataRequired()])
    name = StringField('name', validators=[DataRequired(), Length(max=255, message="Name could not greater than 255 characters")])
    price = DecimalField("price", validators=[DataRequired(), NumberRange(min=0.01,message='Price should be grater than 0')])
    description = StringField("description",validators=[DataRequired(), Length(max=2000, message="Description could not greater than 2000 characters")])
    preview_image = StringField('preview_image',validators=[DataRequired()])
