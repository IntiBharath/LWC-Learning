public with sharing class AccountController {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountList(){
        return [select Id,Name,Type,Industry from Account LIMIT 5];
    }
    @AuraEnabled(cacheable=true)
    public static List<Account> filterAccountType(String type){
        return [select Id,Name,Type,Industry from Account where Type=:type LIMIT 5];
    }
    @AuraEnabled(cacheable=true)
    public static List<Account> findAccounts(String searchKey){
        String key = '%'+searchKey+'%';
        return [select Id,Name,Type,Industry from Account where Name LIKE:key];
    }
}
