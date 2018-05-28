#include<iostream>
#include<cstdio>
#include<cstring>
#include<cmath>
#include<algorithm>
using namespace std;
typedef long long ll;
const int mod=1e8+7;
char s[10010];
int x[10010];
int a[10010];
int n;

ll f()
{
    ll ans=1;
    for (int i=3;i<=n;i++) {
        x[i]=a[i-1]-a[i-2]+x[i-3];
        if (x[i]<0||x[i]>2) return 0;
        if (x[i]==1) ans=ans*2%mod;
    }
    if (n>=2&&x[n-2]!=a[n-1]-a[n]) return 0;
    return ans;
}

int main()
{
	int t;
    scanf("%d",&t);
    while (t--) 
	{
        scanf("%s",s);
        n=strlen(s);
        for (int i=1;i<=n;i++)
		{
            a[i]=s[i-1]-'0';
        }
        if (n==1) {
            if (a[1]<0||a[1]>2) puts("0");
            else if (a[1]==1) puts("2");
            else puts("1");
            continue;
        }
        ll ans=0;
        for (int i=0;i<=2;i++)
		{
            x[0]=0;x[1]=i;x[2]=a[1]-x[1];
            if (x[2]<0||x[2]>2) continue;
            ll tmp=1;
            if (x[1]==1) tmp*=2;
            if (x[2]==1) tmp*=2;
            ans=(ans+tmp*f())%mod;
        }
        printf("%lld\n",ans);
    }
    return 0;
}
