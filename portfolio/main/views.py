
from django.shortcuts import render
from django.http import HttpResponse
from django.core.mail import send_mail
from django.conf import settings

def home(request):
    # You could pass context data here if needed
    return render(request, 'main/home.html')

def about(request):
    # Add any about page context data here
    context = {
        'title': 'About Me',
        # Add more context as needed
    }
    return render(request, 'main/about.html', context)

def experience(request):
    # Example experiences data
    experiences = [
        {
            'title': 'Data Science Intern',
            'company': 'ABC Analytics',
            'period': 'Jan 2023 - Present',
            'description': 'Working on machine learning models for predictive analytics.'
        },
        {
            'title': 'Web Developer',
            'company': 'XYZ Tech',
            'period': 'Jun 2022 - Dec 2022',
            'description': 'Developed responsive websites using Django and Bootstrap.'
        },
        # Add more experiences
    ]
    
    context = {
        'title': 'Experience',
        'experiences': experiences
    }
    
    return render(request, 'main/experience.html', context)

def skills(request):
    # Example skills data
    skills_data = {
        'technical': ['Python', 'Django', 'JavaScript', 'HTML/CSS', 'Bootstrap', 'SQL', 'Data Analysis'],
        'soft': ['Problem Solving', 'Communication', 'Teamwork', 'Time Management']
    }
    
    context = {
        'title': 'Skills',
        'skills': skills_data
    }
    
    return render(request, 'main/skills.html', context)

def projects(request):
    # Example projects data
    projects_data = [
        {
            'title': 'E-commerce Website',
            'description': 'Developed a fully functional e-commerce platform with Django.',
            'image': 'img/projects/ecommerce.jpg',
            'category': 'web',
            'github': '#',
            'live': '#'
        },
        {
            'title': 'Weather App',
            'description': 'Weather forecasting app using weather API.',
            'image': 'img/projects/weather.jpg',
            'category': 'web',
            'github': '#',
            'live': '#'
        },
        {
            'title': 'ML Classification Model',
            'description': 'Image classification using TensorFlow.',
            'image': 'img/projects/ml.jpg',
            'category': 'data',
            'github': '#',
            'live': '#'
        },
        # Add more projects
    ]
    
    # Filter by category if requested
    category = request.GET.get('category', None)
    if category and category != 'all':
        filtered_projects = [p for p in projects_data if p['category'] == category]
    else:
        filtered_projects = projects_data
    
    context = {
        'title': 'Projects',
        'projects': filtered_projects,
        'all_projects': projects_data,
        'active_category': category or 'all'
    }
    
    return render(request, 'main/projects.html', context)

def services(request):
    # Example services data
    services_data = [
        {
            'title': 'Web Development',
            'description': 'Building responsive websites with modern technologies.',
            'icon': 'fas fa-code'
        },
        {
            'title': 'Data Analysis',
            'description': 'Analyzing complex data sets to extract insights.',
            'icon': 'fas fa-chart-bar'
        },
        {
            'title': 'Machine Learning',
            'description': 'Implementing ML models for predictive analytics.',
            'icon': 'fas fa-brain'
        },
        # Add more services
    ]
    
    context = {
        'title': 'Services',
        'services': services_data
    }
    
    return render(request, 'main/services.html', context)

def contact(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        email = request.POST.get('email')
        subject = request.POST.get('subject')
        message = request.POST.get('message')
        
        # Basic form validation
        if name and email and message:
            # You would configure email settings in settings.py to make this work
            try:
                send_mail(
                    f"Portfolio Contact: {subject}",
                    f"From: {name} <{email}>\n\n{message}",
                    email,
                    ['your-email@example.com'],  # Replace with your email
                    fail_silently=False,
                )
                return render(request, 'main/contact.html', {'success': True})
            except Exception as e:
                return render(request, 'main/contact.html', {'error': str(e)})
        else:
            return render(request, 'main/contact.html', {'error': 'Please fill in all required fields.'})
    
    return render(request, 'main/contact.html')
