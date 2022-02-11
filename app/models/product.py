from multiprocessing.sharedctypes import Value
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
    archived = db.Column(db.Boolean, default=False, nullable=False)
    created_at = db.Column(db.DateTime, default=db.func.now(), nullable=False)
    updated_at = db.Column(db.DateTime, default=db.func.now(), nullable=False)

    user = db.relationship("User", back_populates="products")
    purchases = db.relationship("Purchase", back_populates="product")
    cart_items = db.relationship(
        "CartItem", back_populates="product", cascade="all, delete-orphan"
    )
    reviews = db.relationship(
        "Review", back_populates="product", cascade="all, delete-orphan"
    )
    images = db.relationship(
        "ProductImage", back_populates="product", cascade="all, delete-orphan"
    )

    @staticmethod
    def get_all():
        """
        Query for all product listings.
        """
        products = Product.query.all()
        return products

    @staticmethod
    def get_by_id(id):
        """
        Returns a product listing by id.
        """
        product = Product.query.filter(Product.id == id).first_or_404()
        return product

    @staticmethod
    def create(user_id, **kwargs):
        """
        Creates a new product listing.
        """
        product = Product(
            user_id=user_id,
            title=kwargs["title"],
            description=kwargs["description"],
            price=kwargs["price"],
            stock=kwargs["stock"],
            category=kwargs["category"],
        )

        return product

    @staticmethod
    def update(product, **kwargs):
        """
        Updates a product listing's information
        """
        print("@@@@@@", product)
        for key, value in kwargs.items():
            setattr(product, key, value)

        if product.discount:
            product.apply_discount()

        return product

    @staticmethod
    def archive(product):
        """
        Removes a listing by setting archived flag to True.
        """
        setattr(product, "stock", 0)
        setattr(product, "archived", True)
        return product

    def apply_discount(self):
        """
        Apply a discount and update a product's price.
        """
        percentage = self.discount / 100
        setattr(self, "price", self.price * (1 - percentage))

    def purchase(self, quantity):
        """
        Updates a product's stock on purchase.
        """
        if self.stock - quantity < 0:
            setattr(self, "stock", 0)
        else:
            setattr(self, "stock", self.stock - quantity)

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
            "images": [image.image_url for image in self.images],
            "user": {
                "username": self.user.username,
                "profile_picture_url": self.user.profile_picture_url,
                "rating": self.user.rating,
            },
        }
