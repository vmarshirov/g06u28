#!/usr/bin/env python3

def form_dictionary():
    print ("\n\ndef form_dictionary(): \n________________")
    import os, sys
    import time, datetime
    import cgi, cgitb
    cgitb.enable()

    print("Ваш IP:", os.environ["REMOTE_ADDR"])
    print("Текущие дата и время:", time.strftime('%Y-%m-%d %H:%M'))


    print ("\nСтрока запроса")
    form = cgi.FieldStorage()
    print("form: ", form)
    print ("ключи(form.keys):", form.keys())

    form_keys_list=list()
    form_values_list=list() 
    form_dict=dict() 
    print  ("Названия ключей  и их значения (как есть)")
    i=0
    for form_key in form.keys():
        print  (i,  ": ", form_key," = ", form.getvalue(form_key))
        form_keys_list.append(form_key)
        form_values_list.append(form.getvalue(form_key))
        i+=1
    # сортируем список ключей (что-бы поля не сбоили при выводе в файл)
    print  ("\n\nКлючи  и их значения после сортировки ")
    form_keys_list.sort()
    i=0
    for form_key in form_keys_list:
        print  (i,  ": ", form_key," = ", form.getvalue(form_key))
        form_values_list.append(form.getvalue(form_key))
        form_dict.update({form_key: form.getvalue(form_key)})
        i+=1
    print("form_keys_list: ", form_keys_list)
    print("form_dict: ", form_dict)

    form_dict.update({"REMOTE_ADDR": os.environ[ "REMOTE_ADDR" ]})
    form_dict.update({"date": time.strftime('%Y-%m-%d %H:%M')})
    print('\nВ виде словаря (form_dict) с дополнениями:\n', form_dict)
    return(form_dict)


def file_write_read(my_dict):
    print ("\n\ndef file_write_read:\n________________")
    import os, sys
    list_ip = list()
    if "000_file_name" in my_dict.keys():
        file = "../tmp/" + my_dict.get('000_file_name')
        print ("\nfile: ", file)
        print ("Записываем в: ", os.environ[ "HTTP_HOST" ], file[2:], sep= '')
        if(my_dict.get("010_mode")== 'w'):#0 - очищаем файл
            file_stream = open(file, mode='w', encoding="utf-8", errors=None)
            file_stream.close()
        file_stream = open(file, mode='a', encoding="utf-8", errors=None)
        for form_key in my_dict.keys():
            form_value = my_dict.get(form_key)
            file_stream.write("%1s:%1s;" % (form_key, form_value ))
            sys.stdout.write("%1s:%1s;" % (form_key, form_value ))
        file_stream.write("\n")
        file_stream.close()
        r_stream = open(file, mode='r', encoding="utf-8")
        print ("\n\nПострочно считываем строки из ", os.environ[ "HTTP_HOST" ] , file[2:], " и разбираем на пары\n", sep='', end='')
        for line in r_stream.readlines():
            print (line, end='')
            words = line.split(";")
            for word in words:
                pair = word.split(":")
                if pair[0] == 'REMOTE_ADDR': list_ip.append(pair[1])
            print(words)
        print("Список: ", list_ip)

def file_write_read_json(my_dict):
    print ("\n\ndef file_write_read_json:\n________________")
    import os, sys
    import json
    list_ip = []
    if "000_file_name" in my_dict.keys():
        file = "../tmp/" + my_dict.get('000_file_name') + ".json"
        print ("\nfile: ", file)
        print ("Записываем в: ", os.environ[ "HTTP_HOST" ], file[2:], sep= '')
        if(my_dict.get("010_mode")== 'w'):#0 - очищаем файл
            file_stream = open(file, mode='w', encoding="utf-8", errors=None)
            file_stream.close()
        file_stream = open(file, mode='a', encoding="utf-8", errors=None)
        file_stream.write(json.dumps(my_dict, ensure_ascii=False))
        sys.stdout.write(json.dumps(my_dict, ensure_ascii=False))
        file_stream.write("\n")
        file_stream.close()
        r_stream = open(file, mode='r', encoding="utf-8")
        print ("\n\nПострочно считываем строки и преобразуем в словарь из ", os.environ[ "HTTP_HOST" ] , file[2:],  sep='')
        for line in r_stream.readlines():
            print(line, end='')
            new_dict =  json.loads(line)
            print(new_dict)
            list_ip.append(new_dict.get('REMOTE_ADDR'))
        print("Список: ",list_ip)


def file_write_read_json_only():
    print ("\n\ndef file_write_read_json_only:\n________________")
    import json
    import os, sys
    import time, datetime
    import cgi, cgitb
    cgitb.enable()
    form = cgi.FieldStorage()
    print  ("\nНазвания ключей  и их значения (как есть)")
    form_keys_list = form.keys()
    print("form_keys_list: ",form_keys_list)
    form_keys_list.sort()
    print("form_keys_list: ",form_keys_list)

    form_values_list=list()
    form_dict=dict()
    i=0
    for form_key in form_keys_list:
        form_values_list.append(form.getvalue(form_key))
        form_dict.update({form_key: form.getvalue(form_key)})
        i+=1

    form_dict.update({"REMOTE_ADDR": os.environ[ "REMOTE_ADDR" ]})
    form_dict.update({"date": time.strftime('%Y-%m-%d %H:%M')})
    print("form_dict: ", form_dict)

    if "000_file_name" in form_keys_list:
        file = "../tmp/" + form_dict.get('000_file_name') + "_only.json"
        print ("\nfile: ", file)
        print ("Записываем в: ", os.environ[ "HTTP_HOST" ], file[2:], sep= '')
        if(form_dict.get("010_mode")== 'w'):#0 - очищаем файл
            file_stream = open(file, mode='w', encoding="utf-8", errors=None)
            file_stream.close()
        file_stream = open(file, mode='a', encoding="utf-8", errors=None)
        file_stream.write(json.dumps(form_dict, ensure_ascii=False))
        sys.stdout.write(json.dumps(form_dict, ensure_ascii=False))
        file_stream.write("\n")
        file_stream.close()

        list_ip = list() #для формирования списка по одному из ключей
        r_stream = open(file, mode='r', encoding="utf-8")
        print ("\n\nПострочно считываем строки и преобразуем в словарь из ", os.environ[ "HTTP_HOST" ] , file[2:],  sep='')
        for line in r_stream.readlines():
            print(line, end='')
            new_dict =  json.loads(line)
            print(new_dict)
            list_ip.append(new_dict.get('REMOTE_ADDR'))
        print("Список list_ip: ",list_ip)
        print("len(list_ip): ",len(list_ip))



print('''\
Content-type:text/html\r\n
<html>
<head>\n<title>Форма, строка запроса, запись и считывание</title>\n</head>
<body>\n<pre>
''')
result_form = form_dictionary()#Анализируем строку запроса
print('\nФункция вернула:\n', result_form, '\n')
# file_write_read(result_form)
# file_write_read_json(result_form)
# file_write_read_json_only()

print('\n</pre>\n</body>\n<html>')

