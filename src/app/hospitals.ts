export interface Hospital {
  name: string;
  city: string;
  pos: google.maps.LatLngLiteral;
  distance?: number;
  covid19: boolean;
  public: boolean;
  private: boolean;
}


export const HOSPITALS: Hospital[] = [
  {name: 'Hospital Aleman Nicaragüense', city: 'Managua', pos: { lat: 12.147108, lng: -86.217831 },
    covid19: true, public: true, private: false},
  {name: 'Hospital Departamental Gaspar Garcia Laviana', city: 'Rivas', pos: {lat: 11.440219, lng: -85.839791},
    covid19: true, public: true, private: false},
  {name: 'Hospital Departamental España', city: 'Chinandega', pos: {lat: 12.626303, lng: -87.144209},
    covid19: true, public: true, private: false},
  {name: 'Hospital Departamental Juan Brenes', city: 'Somoto', pos: {lat: 13.482077, lng: -86.585893},
    covid19: true, public: true, private: false},
  {name: 'Hospital Departamental Alfonso Moncada', city: 'Ocotal', pos: {lat: 13.6304475, lng: -86.4775699},
    covid19: true, public: true, private: false},
  {name: 'Hospital Departamental Luis Felipe Moncada', city: 'San Carlos', pos: {lat: 11.128786, lng: -84.776599},
    covid19: true, public: true, private: false},
  {name: 'Hospital Asunción', city: 'Juigalpa', pos: {lat: 12.097655, lng: -85.364406},
    covid19: true, public: true, private: false},
  {name: 'Hospital Oscar Danilo Rosales', city: 'León', pos: {lat: 12.4335627, lng: -86.87853},
    covid19: true, public: true, private: false},
  {name: 'Hospital Nuevo Amanecer', city: 'Bilwi', pos: {lat: 14.0366429, lng: -83.3942477},
    covid19: true, public: true, private: false},
  {name: 'Hospital Ernesto Sequeira', city: 'Bluefields', pos: {lat: 12.008856, lng: -83.768343},
    covid19: true, public: true, private: false},
  {name: 'Hospital Antonio Lenín Fonseca', city: 'Managua', pos: {lat: 12.148585, lng: -86.310634},
    covid19: false, public: true, private: false},
  {name: 'Hospital Fernando Vélez Paiz', city: 'Managua', pos: {lat: 12.123597, lng: -86.305951},
    covid19: false, public: true, private: false},
  {name: 'Hospital Manolo Morales', city: 'Managua', pos: {lat: 12.121509, lng: -86.245445},
    covid19: false, public: true, private: false},
  {name: 'Hospital Infantil Manuel de Jesús Rivera', city: 'Managua', pos: {lat: 12.123301, lng: -86.237302},
    covid19: false, public: true, private: false},
  {name: 'Hospital Bertha Calderón', city: 'Managua', pos: {lat: 12.125055, lng: -86.298356},
    covid19: false, public: true, private: false},
  {name: 'Hospital Militar Dr. Alejandro Dávila', city: 'Managua', pos: {lat: 12.132829, lng: -86.277955},
    covid19: false, public: false, private: true},
  {name: 'Hospital Metropolitano Vivian Pellas', city: 'Managua', pos: {lat: 12.086061, lng: -86.233321},
    covid19: false, public: false, private: true},
  {name: 'Hospital Bautista', city: 'Managua', pos: {lat: 12.141973, lng: -86.263196},
    covid19: false, public: false, private: true},
  {name: 'Hospital Monte España', city: 'Managua', pos: {lat: 12.114746, lng: -86.265319},
    covid19: false, public: false, private: true},
  {name: 'Hospital Su Médico', city: 'Managua', pos: {lat: 12.139631, lng: -86.282952},
    covid19: false, public: false, private: true},
];
