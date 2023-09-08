public class SoqlExample2 {
    public List<Account> accs{set;get;}
    public SoqlExample2(){
        accs=[select id,Name,Phone from account LIMIT 5];
    }
}