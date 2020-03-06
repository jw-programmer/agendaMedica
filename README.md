# Agenda médica

## Sobre o projeto

Este projeto é um estudo de caso/prova de conceito de uma simulação de agendamento médico. O backend será feito em Django Rest e o frontend em Angular

## Instruções para subir o backend

### Pipenv

Para controlar as dependencias deste projeto, utilizei o [pipenv](https://pipenv-fork.readthedocs.io/en/latest/). Este é um gerenciador de pacotes python que utiliza pip, porém têm mais qualidades, já cria o virtualenv e faz builds deterministicos.

Para instala-lo, você deve seguir os seguintes passos:

#### ubuntu

```bash
pip install pipenv
```
**Atenção** A não ser que configurado previamente, o ubuntu ainda utiliza por padrão o python 2. o pipenv só é compativel com o python 3. Logo, talvez  você precise executar esse comando:

```bash
pip3 install pipenv
```
talvez seja necessário reiniciar o pc. Quanto terminar, veja se foi instalado corretamente:

```bash
pipenv --version 
```

#### fedora

Para instalar no fedora, use o comando:

```bash
dnf install pipenv 
```
 Quanto terminar, veja se foi instalado corretamente:

```bash
pipenv --version 
```

### Preparando ambiente

Se estiver tudo okay, abra a pasta /backend em um terminal. Lá execute o seguinte comando:

```
pipenv install --three
```

Isso instalará as dependencias principais do arquivo pipefile,(incluisve, é a referencia aonde o comando deve ser executado) e dizerá que você quer usar o python versão 3. Este comando também é usado para criar novos projetos.

Feito o comando, uma virtualenv foi criada automáticamente. Para entrar dentro dela, use:

```
pipenv shell
```

Você estará dentro do ambiente.

### Subindo o backend

uma vez dentro do virtualenv, use o comando para entrar na pasta do projeto django

```
cd agendamedica
```

Eu sei que o ideal é utilizar um arquivo .env ou similar para configurar coisas sensiveis, como o debug, secret key, validade de tokens, etc... mas pelo bem da simplicidade, dado o fato que isto é uma demonstração, perefir não realizar essas configurações.

Execute as migrations:

```
Python manage.py migrate
```

Crie um superuser:


```
python manage.py createsperuser
```

E suba o servidor:


```
python manage.py runserver
```

Com isso o backend estará sendo executado em localhost:8000

## Instruções para subir o frontend

O front é feito em Angular, logo, estou partindo do suposto de que o NPM está instalado na máquina. Por ser o gerenciador mais popular, não vou dá maiores detalhes de como instalá-lo.

primeiro, instale o CLI do Angular:

```
npm install -g @angular/cli
```

feito isso, você precisa abrir seu terminal dentro da pasta /frontend. Depois, instale as dependencias do projeto:

```
npm install
```

Espera a instalação e quando terminar, suba o projeto:

```
ng serve --open
```

Com isso, o navegador será aberto para você já ná página de login, com o front rodando em localhost:4200. Começe a testar.