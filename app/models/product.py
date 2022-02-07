from .db import db


class Product(db.Model):
    __tablename__ = "products"

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    title = db.Column(db.String(255), nullable=False)
    description = db.Column(db.String(4000))
    price = db.Column(db.Numeric(6, 2), nullable=False)
    discount = db.Column(db.Integer, default=0)
    rating = db.Column(db.Integer, default=0)
    stock = db.Column(db.Integer, nullable=False)
    category = db.Column(db.String(100), nullable=False)
    created_at = db.Column(db.DateTime, default=db.func.now(), nullable=False)
    updated_at = db.Column(db.DateTime, default=db.func.now(), nullable=False)

    user = db.relationship("User", back_populates="products")
    purchases = db.relationship("Purchase", back_populates="product")
    images = db.relationship("ProductImage", back_populates="product")
    cart_items = db.relationship("CartItem", back_populates="product")
    reviews = db.relationship("Review", back_populates="product")

    def __repr__(self):
        return (
            f"<Product (id: {self.id},\n"
            f"user_id: {self.user_id},\n"
            f"title: {self.title},\n"
            f"description: {self.description},\n"
            f"price: {self.price},\n"
            f"discount: {self.discount},\n"
            f"rating: {self.rating},\n"
            f"stock: {self.stock},\n"
            f"category: {self.category})>"
        )

    def to_dict(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "title": self.title,
            "description": self.description,
            "price": str(self.price),
            "discount": self.discount,
            "rating": self.rating,
            "stock": self.stock,
            "category": self.category,
        }
