#include<iostream>
using namespace std;

struct point{
	double x,y;
	
	void print() //print is a member function of structure point
	{
		cout<<x<<"\t "<<y<<endl;
	}
	
    void move(double a=0.0,double b=0) //member function
    {
       x+=a;y+=b;
       return ;  	
    }
  };

    void print(point  p []) //global print function for point arrays
     {
      for (int i=0;i<3;i++)
       {
 	
        cout<<"point "<<i<<"\t\t ";
        p[i].print();  	 
       }
     return ;
    }


    void yreflect(point & p) //global function to reflect point about y-axis
    {
	  p.x=-p.x;	 
    }

    int main()
    {	
	 point origin={0.0,0.0};
	 
	 origin.print();
	 point* xp;
	 xp = new point;
	 xp->x=1.0;
	 xp->y=0.0;
	 xp->print();
	 xp->move(2.0,1.0);
	 xp->print();
	 yreflect(*xp);
	 xp->print();
	
	
	//create an array of three points to represent  a triangle
	
	point tr1[3]; //static array of points
	tr1[0].x=0.0;tr1[0].y=0.0;
	tr1[1].x=1.0;tr1[1].y=0.0;
	tr1[2].x=0.0;tr1[2].y=1.0;
	
	print(tr1); 
	cout<<endl<<endl;
	
	point* tr2=new point [3]; //dynamic array of points
	tr2->x=1.0;tr2->y=2.0;
	(tr2+1)->x=2.0;(tr2+1)->y=3.0;
	(tr2+2)->x=3.0;(tr2+2)->y=3.2;
	print(tr2);
	
	return 0;
}
