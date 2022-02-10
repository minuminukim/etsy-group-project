"""add 'archived' flag to products table

Revision ID: 2bd1e0bb09bb
Revises: 6c6d77910952
Create Date: 2022-02-10 12:35:27.438994

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '2bd1e0bb09bb'
down_revision = '6c6d77910952'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('products', sa.Column('archived', sa.Boolean(), nullable=False))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('products', 'archived')
    # ### end Alembic commands ###