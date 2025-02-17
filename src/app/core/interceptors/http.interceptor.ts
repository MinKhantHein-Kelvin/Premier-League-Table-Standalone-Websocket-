import { HttpInterceptorFn } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

// Interceptor function
export const httpInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('Interceptor triggered');  // Log to verify the interceptor is triggered

  // Create the headers
  // const clonedRequest = req.clone({
  //   setHeaders: {
  //     'x-rapidapi-key': '3fdccb4947msh0a085081982e6e8p1d46e7jsnb7b92a2d4689',
  //     'x-rapidapi-host': 'football-highlights-api.p.rapidapi.com',
  //   },
  // });

  console.log(req);  // Log the cloned request

  // Pass the cloned request to the next handler
  return next(req);
};
