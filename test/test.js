import * as chai from "chai";
const expect = chai.expect;
import chaiHttp from "chai-http";
import app from '../index.js'
import faker from 'faker';

const c = chai.use(chaiHttp);

describe('GET /api/info', () => {
    it('should GET all info', (done) => {
        c.request(app)
            .get('/api/info')
            .end((err, res) => {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                expect(res.body).to.be.a('array');
                expect(res.body).to.not.have.lengthOf(0);
            });
            done();
    });
});

describe('POST /api/info', () => {
    it('should POST a new component', (done) => {
        let prueba = {
            nombre: faker.Lorem.words(1)[0],
            edad: faker.random.number({ min: 1, max: 99 }), // Rango de edad válido
            color: faker.Internet.color(),
            nombre2: faker.Lorem.paragraph(1)[0],
            descripcion: faker.Lorem.paragraph(1)[0],
            imagenComponente: faker.Image.food()
        };
        console.log(prueba);
        c.request(app)
            .post('/api/info')
            .send(prueba)
            .end((err, res) => {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                expect(res.body).to.be.a('object');
                expect(res.body).to.not.have.property('prueba');
            });
            done();
    });
});

describe('GET /api/info/:id', () => {
    it('should get all info id', (done) => {
        c.request(app)
            .get('/api/info/1')
            .end((err, res) => {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                expect(res.body[0]).to.not.have.property('id');
                expect(res.body[0].id).to.equal(1); 
                done();
            });
           
    });
});
