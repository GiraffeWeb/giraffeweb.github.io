#!/bin/bash

mkdir -p База_данных
mkdir -p Приказы_и_распоряжения
mkdir -p Проекты/Горизонт-2030/Графические_документы/ДСП
mkdir -p Проекты/Горизонт-2030/Графические_документы/Несекретно
mkdir -p Проекты/Горизонт-2030/Графические_документы/Секретно
mkdir -p Проекты/Горизонт-2030/Текстовые_документы/ДСП
mkdir -p Проекты/Горизонт-2030/Текстовые_документы/Несекретно
mkdir -p Проекты/Горизонт-2030/Текстовые_документы/Секретно
mkdir -p Проекты/Горизонт-2030/Черновики/Громов
mkdir -p Проекты/Горизонт-2030/Черновики/Кузнецов
mkdir -p Проекты/Горизонт-2030/Черновики/Рябов
mkdir -p Проекты/Машина_4.0
mkdir -p Проекты/ЭкоЭнергия
mkdir -p Экономика/Канцелярские_товары_НС
mkdir -p Экономика/Продажи_ДСП
useradd gromov
useradd kuznetsov
useradd ryabov
useradd chistyakov
useradd yuvchenko
useradd ivanov
setfacl -m u:gromov:--- ./Экономика/Канцелярские_товары_НС
setfacl -m u:kuznetsov:--- ./Экономика/Канцелярские_товары_НС
setfacl -m u:ryabov:--- ./Экономика/Канцелярские_товары_НС
setfacl -m u:ivanov:rwx ./Экономика/Канцелярские_товары_НС
setfacl -m u:chistyakov:rwx ./Экономика/Канцелярские_товары_НС
setfacl -m u:yuvchenko:rwx ./Экономика/Канцелярские_товары_НС
setfacl -m u:gromov:--- ./Экономика/Продажи_ДСП
setfacl -m u:kuznetsov:--- ./Экономика/Продажи_ДСП
setfacl -m u:ryabov:--- ./Экономика/Продажи_ДСП
setfacl -m u:chistyakov:rwx ./Экономика/Продажи_ДСП
setfacl -m u:yuvchenko:rwx ./Экономика/Продажи_ДСП
setfacl -m u:ivanov:rwx ./Экономика/Продажи_ДСП
setfacl -m u:gromov:r--,u:kuznetsov:r--,u:ryabov:r--,u:chistyakov:rwx,u:yuvchenko:rwx,u:ivanov:rwx ./Приказы_и_распоряжения
setfacl -m u:gromov:r--,u:kuznetsov:r--,u:ryabov:r--,u:chistyakov:rwx,u:yuvchenko:r--,u:ivanov:r-- ./База_данных
setfacl -m u:gromov:rwx,u:kuznetsov:rwx,u:ryabov:rwx,u:chistyakov:rwx,u:yuvchenko:---,u:ivanov:rwx ./Проекты/Горизонт-2030/Графические_документы/Несекретно
setfacl -m u:gromov:---,u:kuznetsov:rwx,u:ryabov:rwx,u:chistyakov:rwx,u:yuvchenko:---,u:ivanov:rwx ./Проекты/Горизонт-2030/Графические_документы/ДСП
setfacl -m u:gromov:---,u:kuznetsov:---,u:ryabov:rwx,u:chistyakov:rwx,u:yuvchenko:---,u:ivanov:rwx ./Проекты/Горизонт-2030/Графические_документы/Секретно
setfacl -m u:gromov:rwx,u:kuznetsov:rwx,u:ryabov:rwx,u:chistyakov:rwx,u:yuvchenko:---,u:ivanov:rwx ./Проекты/Горизонт-2030/Текстовые_документы/Несекретно
setfacl -m u:gromov:---,u:kuznetsov:rwx,u:ryabov:rwx,u:chistyakov:rwx,u:yuvchenko:---,u:ivanov:rwx ./Проекты/Горизонт-2030/Текстовые_документы/ДСП
setfacl -m u:gromov:---,u:kuznetsov:---,u:ryabov:rwx,u:chistyakov:rwx,u:yuvchenko:---,u:ivanov:rwx ./Проекты/Горизонт-2030/Текстовые_документы/Секретно
setfacl -m u:gromov:rwx,u:kuznetsov:---,u:ryabov:---,u:chistyakov:rwx,u:yuvchenko:---,u:ivanov:rwx ./Проекты/Горизонт-2030/Черновики/Громов
setfacl -m u:gromov:---,u:kuznetsov:rwx,u:ryabov:---,u:chistyakov:rwx,u:yuvchenko:---,u:ivanov:rwx ./Проекты/Горизонт-2030/Черновики/Кузнецов
setfacl -m u:gromov:---,u:kuznetsov:---,u:ryabov:rwx,u:chistyakov:rwx,u:yuvchenko:---,u:ivanov:rwx ./Проекты/Горизонт-2030/Черновики/Рябов











