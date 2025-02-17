import { HttpInterceptorFn } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

// Interceptor function
export const httpInterceptor: HttpInterceptorFn = (req, next) => {
  const newRequest = req.clone({
    setHeaders: {
      'x-rapidapi-key': '3fdccb4947msh0a085081982e6e8p1d46e7jsnb7b92a2d4689',
      'x-rapidapi-host': 'football-highlights-api.p.rapidapi.com',
    },
  });
  return next(newRequest);
};
