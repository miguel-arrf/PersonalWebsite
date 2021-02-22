from django.shortcuts import render


def index(request):
    return render(request, 'base.html')


def main(request):
    return render(request, 'main.html')
