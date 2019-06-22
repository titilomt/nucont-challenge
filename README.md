<h1>nucont-challenge</h1>
<p>Challenge of nucont Javascript all the way</p>
<h2>Wellcome to Nucont challenge</h2>
<p>This was a challenge that we should extract data with great perfomance and exelent results, for interview purpose, so before we start our Tour lets take a look in the technologies we used!</p>
<h3>Front-end</h3>
<p>To run Frontend project in your machine first you need to download Angular 8 and be sure to get the nodejs v10.10.0 or higher, beware of Typescript version(must be 3.4.0 or higher).</p>
<ul>
  <li>Angular 8</li>
  <li>Angular Material</li>
  <li>Bootstrap 4.4</li>
  <li>FontAwasome</li>
  <li><a href="https://github.com/titilomt/nucont-challenge/blob/master/nucont-front/README.md">README.md frontend</a></li>
</ul>
<h4>Runnig</h4>
<p>For runnig the project just go to frontend folder and type <code>npm i</code> and then <code>ng serve --open</code> this should open your main browser in 4200 port with the application.</p>
<h3>Backend</h3>
<p>Just a simple nodejs server that has great powers of data extracting!</p>
<p>In this project all business rules are treated in backend - Simulating the real dayling projects</p>
<p>Here are the specs used in this backend:</p>
<ul>
  <li>Node v10.10.0 - My cofiguration although thats not necessary for this backend Project</li>
  <li>Expressjs</li>
  <li>Mongodb Plugin - ^3.2.7</li>
  <li>mongoose - ^5.6.0</li>
  <li>cors</li>
  <li>body-parser</li>
  <li><a href="https://github.com/titilomt/nucont-challenge/blob/master/nucont-back/README.md">README.md backend</a></li>
</ul>
<h4>Runnig</h4>
<p>Before running be sure that port 3003 are available and of course create a mongo connection in port 27017 aka localhost, if you got your own connection just change it inside the config folder config.json file(Remember that in this mongobd should exists a connection called <strong>nucont</strong>)</p>
<p>Now finnaly runnig it, just go in backend folder and type <code>npm i</code> and then <code>node serve.js</code></p>