from django.shortcuts import render

# Create your views here.


def login(request):
    return render(request, 'login.html')


def forgetpassword(request):
    return render(request, 'forget-password.html')


def dashboard(request):
    return render(request, 'dashboard.html')


def employeelist(request):
    return render(request, 'employee-list.html')


def addemployee(request):
    return render(request, 'add-employee.html')


def customerlist(request):
    return render(request, 'customer-list.html')


def addcustomer(request):
    return render(request, 'add-customer.html')


def supplierlist(request):
    return render(request, 'supplier-list.html')


def addsupplier(request):
    return render(request, 'add-supplier.html')


def productlist(request):
    return render(request, 'product-list.html')


def addproduct(request):
    return render(request, 'add-product.html')


def addproductcsv(request):
    return render(request, 'add-product-csv.html')


def inventoryadjustmentlist(request):
    return render(request, 'inventory-adjustment-list.html')


def addinventoryadjustment(request):
    return render(request, 'add-inventory-adjustment.html')


def adjustment_product_list(request):
    return render(request, 'adjustment_product_list.html')


def product_detail(request):
    return render(request, 'product_detail.html')


def inventory_adjustment_products_list(request):
    return render(request, 'inventory_adjustment_products_list.html')
