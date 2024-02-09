from django.shortcuts import render

def home(request):
    return render(request, "app/home.html")

def dashboard(request):
    page = "dashboard"
    
    return render(request, "app/dashboard.html", {
        "page": page
    })

def edit_profile(request):
    page = "edit-profile"

    return render(request, "app/edit-profile.html", {
        "page": page
    })