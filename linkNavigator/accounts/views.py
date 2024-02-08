from django.shortcuts import render

def login_user(request):
    page = "login"

    return render(request, "accounts/login-register.html", {
        "page": page,
    })

def sign_up(request):
    page = "sign-up"
    
    return render(request, "accounts/login-register.html", {
        "page": page,
    })