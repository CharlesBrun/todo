# Generated by Django 4.2.13 on 2024-06-07 21:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('todo_api', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='task',
            name='ativo',
            field=models.BooleanField(default=False),
        ),
    ]