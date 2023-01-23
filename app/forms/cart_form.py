from flask_wtf import FlaskForm
from wtforms import StringField,IntegerField,DecimalField,SelectField
from wtforms.validators import DataRequired, ValidationError,Length,NumberRange

class CartForm(FlaskForm):
     product_id = IntegerField('product_id')
     quantity = IntegerField('quantity', validators=[DataRequired(),
          NumberRange(min=1, max=100, message="Quantity should be between 1 and 100")])
