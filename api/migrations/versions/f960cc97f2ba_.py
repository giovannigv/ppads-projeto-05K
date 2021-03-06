"""empty message

Revision ID: f960cc97f2ba
Revises: 
Create Date: 2018-05-12 02:12:41.799844

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import postgresql

# revision identifiers, used by Alembic.
revision = 'f960cc97f2ba'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('orderItems')
    op.drop_table('orders')
    op.add_column('produtos', sa.Column('restaurant_id', sa.Integer(), nullable=True))
    op.drop_constraint('produtos_restaurante_id_fkey', 'produtos', type_='foreignkey')
    op.drop_column('produtos', 'restaurante_id')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('produtos', sa.Column('restaurante_id', sa.INTEGER(), autoincrement=False, nullable=True))
    op.create_foreign_key('produtos_restaurante_id_fkey', 'produtos', 'restaurantes', ['restaurante_id'], ['id'])
    op.drop_column('produtos', 'restaurant_id')
    op.create_table('orders',
    sa.Column('id', sa.INTEGER(), server_default=sa.text("nextval('orders_id_seq'::regclass)"), nullable=False),
    sa.Column('total', postgresql.DOUBLE_PRECISION(precision=53), autoincrement=False, nullable=True),
    sa.Column('timestamp', postgresql.TIMESTAMP(), autoincrement=False, nullable=True),
    sa.Column('done', sa.BOOLEAN(), autoincrement=False, nullable=True),
    sa.Column('user_id', sa.INTEGER(), autoincrement=False, nullable=True),
    sa.Column('restaurante_id', sa.INTEGER(), autoincrement=False, nullable=True),
    sa.ForeignKeyConstraint(['restaurante_id'], ['restaurantes.id'], name='orders_restaurante_id_fkey'),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], name='orders_user_id_fkey'),
    sa.PrimaryKeyConstraint('id', name='orders_pkey'),
    postgresql_ignore_search_path=False
    )
    op.create_table('orderItems',
    sa.Column('id', sa.INTEGER(), server_default=sa.text('nextval(\'"orderItems_id_seq"\'::regclass)'), nullable=False),
    sa.Column('count', sa.INTEGER(), autoincrement=False, nullable=True),
    sa.Column('product_id', sa.INTEGER(), autoincrement=False, nullable=True),
    sa.Column('restaurante_id', sa.INTEGER(), autoincrement=False, nullable=True),
    sa.Column('order_id', sa.INTEGER(), autoincrement=False, nullable=True),
    sa.ForeignKeyConstraint(['order_id'], ['orders.id'], name='orderItems_order_id_fkey'),
    sa.ForeignKeyConstraint(['product_id'], ['produtos.id'], name='orderItems_product_id_fkey'),
    sa.ForeignKeyConstraint(['restaurante_id'], ['restaurantes.id'], name='orderItems_restaurante_id_fkey'),
    sa.PrimaryKeyConstraint('id', name='orderItems_pkey')
    )
    # ### end Alembic commands ###
