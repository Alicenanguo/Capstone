from flask_wtf import FlaskForm
from wtforms import StringField,IntegerField,DecimalField,SelectField
from wtforms.validators import DataRequired, ValidationError,Length,NumberRange

CATEGORY=['Seasonal Decor','Jewelry Gifts','Gifts for the Home','Gifts for Kids','Ready to Ship','On Sale']

class ProductForm(FlaskForm):
    seller_id= IntegerField('seller_id')
    name = StringField('name', validators=[DataRequired(), Length(max=255, message="Name could not greater than 255 characters")])
    price = DecimalField("price", validators=[DataRequired(), NumberRange(min=0,message='Price should be grater than 0')])
    description = StringField("description",validators=[DataRequired(), Length(max=2000, message="Description could not greater than 2000 characters")])
    category = SelectField('category', choices=CATEGORY, validators=[DataRequired()])
    preview_image = StringField('preview_image',validators=[DataRequired()])
