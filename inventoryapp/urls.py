from django.urls import path
from . import views
# from .views import exportpdf

urlpatterns = [
    path("", views.login, name='login'),
    path("forgetpassword", views.forgetpassword, name='forgetpassword'),
    path("dashboard", views.dashboard, name='dashboard'),
    path("employeelist", views.employeelist, name='employeelist'),
    path("addemployee", views.addemployee, name='addemployee'),
    path("customerlist", views.customerlist, name='customerlist'),
    path("addcustomer", views.addcustomer, name='addcustomer'),
    path("supplierlist", views.supplierlist, name='supplierlist'),
    path("addsupplier", views.addsupplier, name='addsupplier'),
    path("productlist", views.productlist, name='productlist'),
    path("addproduct", views.addproduct, name='addproduct'),
    path("addproductcsv", views.addproductcsv, name='addproductcsv'),
    path("inventoryadjustmentlist", views.inventoryadjustmentlist,
         name='inventoryadjustmentlist'),
    path("addinventoryadjustment", views.addinventoryadjustment,
         name='addinventoryadjustment'),
    path("adjustment_product_list", views.adjustment_product_list,
         name='adjustment_product_list'),
     path("product_detail", views.product_detail,name='product_detail'),
]
